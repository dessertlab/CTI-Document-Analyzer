import argparse
import os
parser = argparse.ArgumentParser(
                    prog='CTI Document Analyzer',
                    description='It retieves ATT&CK Techniques from the document given in input using multiple DL-Models',
                    epilog='The input should be provided into a folder in .pdf or .html format')

def valid_path(path):
    if os.path.exists(path):
        return os.path.abspath(path)
    else:
        raise argparse.ArgumentTypeError(f"The path \"{path}\" does not exist!")

parser.add_argument('-path',required=True,type=valid_path,help="Path of CTRs (if used in scrape only mode/default mode), or path of CTI scraped (previous output provided from so mode) if used in predict only mode")
group = parser.add_mutually_exclusive_group()

group.add_argument('-so','--scrape-only', action='store_true', default=False, 
                   help="uses the script only as a scraper and chunker for CTRs.")

group.add_argument('-po','--predict-only', action='store_true', default=False,
                   help="uses the script only for prediction, the output of scrape only must be provided")

parser.add_argument('-scraper',choices=['semantic','naive','paragraph'], default='semantic',help="What chunker should be used")

parser.add_argument('-summarize', action='store_true', help="Chose if should be provided the summarization of scraped paragraph")

parser.add_argument('-tfv','--tf-verbose', action='store_true',default=False, help="Enable Tensorflow/Torch/CUDA Warming and info")

import warnings


args = parser.parse_args()
if args.tf_verbose == False:
    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
    warnings.filterwarnings('ignore')
    import logging
    logging.disable(logging.WARNING)



import json

from utilities import scraper, paragraph_scraper, prcolor
import numpy as np
import spacy

class CustomJSONizer(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.bool_):
            return bool(obj)
        elif isinstance(obj, np.float32):
            return float(obj)
        return super().default(obj)

class SpaCyEncoder(json.JSONEncoder):
    def default(self, obj):
            if isinstance(obj, spacy.tokens.Span):
                return {'text': obj.text, 'start': obj.start_char, 'end': obj.end_char, 'label': obj.label_}
            return json.JSONEncoder.default(self, obj)
    


args=parser.parse_args()
apt= os.path.split(args.path)[-1]

# print(""" ██████ ████████ ██       ██████   ██████   ██████ ██    ██ ███    ███ ███████ ███    ██ ████████      █████  ███    ██  █████  ██      ██    ██ ███████ ███████ ██████  
# ██         ██    ██       ██   ██ ██    ██ ██      ██    ██ ████  ████ ██      ████   ██    ██        ██   ██ ████   ██ ██   ██ ██       ██  ██     ███  ██      ██   ██ 
# ██         ██    ██ █████ ██   ██ ██    ██ ██      ██    ██ ██ ████ ██ █████   ██ ██  ██    ██        ███████ ██ ██  ██ ███████ ██        ████     ███   █████   ██████  
# ██         ██    ██       ██   ██ ██    ██ ██      ██    ██ ██  ██  ██ ██      ██  ██ ██    ██        ██   ██ ██  ██ ██ ██   ██ ██         ██     ███    ██      ██   ██ 
#  ██████    ██    ██       ██████   ██████   ██████  ██████  ██      ██ ███████ ██   ████    ██        ██   ██ ██   ████ ██   ██ ███████    ██    ███████ ███████ ██   ██ """)

print("""
.------------------------------------------------------------------------.
| ██████╗████████╗██╗                                                    |
|██╔════╝╚══██╔══╝██║                                                    |
|██║        ██║   ██║                                                    |
|██║        ██║   ██║                                                    |
|╚██████╗   ██║   ██║                                                    |
| ╚═════╝   ╚═╝   ╚═╝                                                    |
|                                                                        |
|██████╗  ██████╗  ██████╗██╗   ██╗███╗   ███╗███████╗███╗   ██╗████████╗|
|██╔══██╗██╔═══██╗██╔════╝██║   ██║████╗ ████║██╔════╝████╗  ██║╚══██╔══╝|
|██║  ██║██║   ██║██║     ██║   ██║██╔████╔██║█████╗  ██╔██╗ ██║   ██║   |
|██║  ██║██║   ██║██║     ██║   ██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║   |
|██████╔╝╚██████╔╝╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗██║ ╚████║   ██║   |
|╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   |
|                                                                        |
| █████╗ ███╗   ██╗ █████╗ ██╗  ██╗   ██╗███████╗███████╗██████╗         |
|██╔══██╗████╗  ██║██╔══██╗██║  ╚██╗ ██╔╝╚══███╔╝██╔════╝██╔══██╗        |
|███████║██╔██╗ ██║███████║██║   ╚████╔╝   ███╔╝ █████╗  ██████╔╝        |
|██╔══██║██║╚██╗██║██╔══██║██║    ╚██╔╝   ███╔╝  ██╔══╝  ██╔══██╗        |
|██║  ██║██║ ╚████║██║  ██║███████╗██║   ███████╗███████╗██║  ██║        |
|╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝        |
'------------------------------------------------------------------------'
      """)

import time
symbols = ['⣾', '⣷', '⣯', '⣟', '⡿', '⢿', '⣻', '⣽']
i = 0

# should be inserted a nofileexception


if args.predict_only == False:
    if args.scraper=='semantic':
        scraped = scraper.to_json(directory_path=args.path)
        filename = f"output/json/{apt}.json"
        with open(filename, "w") as fp:
            json.dump(obj=scraped, indent=4, fp=fp)
    if args.scraper=='naive':
        scraped = scraper.to_json_naive(directory_path=args.path)
        filename = f"output/json/{apt}_naive.json"
        with open(filename, "w") as fp:
            json.dump(obj=scraped, indent=4, fp=fp, cls=SpaCyEncoder)
    if args.scraper=='paragraph':
        scraped = paragraph_scraper.arrange(directory_path=args.path)
        filename = f"output/json/{apt}_paragraph.json"
        with open(filename, "w") as fp:
            json.dump(obj=scraped, indent=4, fp=fp)
        if args.summarize == True:
            from models import classSummarizator
            summarizer = classSummarizator.Summarizator()
            for entry in scraped:
                 entry["summary"]= summarizer.getSummary(text=entry["text"])
            filename = f"output/json/{apt}_summary.json"
            with open(filename, "w") as fp:
                    json.dump(obj=scraped, indent=4, fp=fp, cls=SpaCyEncoder)


    if (args.scrape_only!=True):
        pass
    else:
        exit("Output saved in output/json")

else:
    #should be insert an exception for no formated files 
    with open(args.path) as fp:
        scraped = json.load(fp=fp)
    name, ext = os.path.splitext(apt)
    apt=name
    
apt=apt.replace("_naive", "")
apt=apt.replace("_paragraph", "")
apt=apt.replace("_summary", "")

from models import classMClassificator,classDetector

prcolor.prRedr("Models Initialization, please wait a couple of minutes")
classifier = classMClassificator.Classificator()
detector = classDetector.Detector()
prcolor.prRed("\r\033[K\r\033[KModels Loaded ✅")


if args.summarize == True:
    for entry in scraped:
        i = (i + 1) % len(symbols)
        prcolor.prYellowfl(' \r\033[KDetector Predicting...  %s\t' % symbols[i])
        if entry.get("summary") is None:
            exit("Please provvide the correct json file")
        entry['detection'] = detector.getPrediction2(entry["summary"])
else:
    for entry in scraped:
        i = (i + 1) % len(symbols)
        prcolor.prYellowfl(' \r\033[KDetector Predicting...  %s\t' % symbols[i])
        entry['detection'] = detector.getPrediction2(entry["text"])

prcolor.prYellow("\r\033[KDetector finished ✅")

aptdir = f"output/{apt}"

if not os.path.exists(aptdir):
    os.makedirs(aptdir)
    #prcolor.prGreen(f"Folder '{aptdir}' created.")                                            #DEBUG
else:
    pass
    #prcolor.prGreen(f"Folder '{aptdir}' already exists.")                                     #DEBUG




if args.summarize == True:

    for entry in scraped:
        i = (i + 1) % len(symbols)
        prcolor.prGreenfl(' \r\033[KClassifier Predicting...  %s\t' % symbols[i])
        if entry.get("summary") is None:
            exit("Please provvide the correct json file")
        if entry["detection"]["response"]== True:
            entry["prediction"] = classifier.getKPrediction(entry["summary"],k=5)
else:
    for entry in scraped:
        i = (i + 1) % len(symbols)
        prcolor.prGreenfl('\r\033[KClassifier Predicting...  %s\t' % symbols[i])
        if entry["detection"]["response"]== True:
            entry["prediction"] = classifier.getKPrediction(entry["text"],k=5)

prcolor.prGreen("\r\033[KClassifier Finisced ✅")

if args.scraper=='naive':
    with open(aptdir+f'/{apt}_naive.json', mode='w') as fp:
        json.dump(fp=fp, obj=scraped,indent=4, cls=CustomJSONizer)
elif args.summarize == True and args.scraper == 'paragraph':
        filename = aptdir+f"/{apt}_summary.json"
        with open(filename, "w") as fp:
            json.dump(obj=scraped, indent=4, fp=fp, cls=CustomJSONizer)
            
elif args.summarize == True and args.scraper == "semantic":
        filename = aptdir+f"/{apt}_adjsummary.json"
        with open(filename, "w") as fp:
            json.dump(obj=scraped, indent=4, fp=fp, cls=CustomJSONizer)

else:
    with open(aptdir+f'/{apt}.json', mode='w') as fp:
        json.dump(fp=fp, obj=scraped,indent=4, cls=CustomJSONizer)

prcolor.prCyan(f"Result saved in {aptdir}/{apt}.json ✅")