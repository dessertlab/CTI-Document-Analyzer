import argparse
import json
import os
from utilities import scraper
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
    
parser = argparse.ArgumentParser(
                    prog='Use pipeline',
                    description='This script given CTIs in input predict ATT&CK techniques associated with ML-Models',
                    epilog='It could be used only for prediction')

def valid_path(path):
    if os.path.exists(path):
        return os.path.abspath(path)
    else:
        raise argparse.ArgumentTypeError(f"The path \"{path}\" does not exist!")

parser.add_argument('-path',required=True,type=valid_path,help="Path of CTI if used in scrape only mode/default mode, or path of CTI scraped if used in predict only mode")
group = parser.add_mutually_exclusive_group()

group.add_argument('-so','--scrape-only', action='store_true', default=False, 
                   help="uses the script only as a scraper and chunker for CTI which must be provided")

group.add_argument('-po','--predict-only', action='store_true', default=False,
                   help="uses the script only for prediction, the output of scrape only must be provided")

parser.add_argument('-scraper',choices=['semantic','naive'], default='semantic',help="What chunker should be used")


args=parser.parse_args()
apt= os.path.split(args.path)[-1]

print(""" ██████ ████████ ██       ██████   ██████   ██████ ██    ██ ███    ███ ███████ ███    ██ ████████      █████  ███    ██  █████  ██      ██    ██ ███████ ███████ ██████  
██         ██    ██       ██   ██ ██    ██ ██      ██    ██ ████  ████ ██      ████   ██    ██        ██   ██ ████   ██ ██   ██ ██       ██  ██     ███  ██      ██   ██ 
██         ██    ██ █████ ██   ██ ██    ██ ██      ██    ██ ██ ████ ██ █████   ██ ██  ██    ██        ███████ ██ ██  ██ ███████ ██        ████     ███   █████   ██████  
██         ██    ██       ██   ██ ██    ██ ██      ██    ██ ██  ██  ██ ██      ██  ██ ██    ██        ██   ██ ██  ██ ██ ██   ██ ██         ██     ███    ██      ██   ██ 
 ██████    ██    ██       ██████   ██████   ██████  ██████  ██      ██ ███████ ██   ████    ██        ██   ██ ██   ████ ██   ██ ███████    ██    ███████ ███████ ██   ██ """)

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

    if (args.scrape_only!=True):
        pass
    else:
        exit("Output saved in output/json")

else:
    with open(args.path) as fp:
        scraped = json.load(fp=fp)
    name, ext = os.path.splitext(apt)
    apt=name
    
apt=apt.replace("_naive", "")
from models import classMClassificator,classDetector
classifier = classMClassificator.Classificator()
detector = classDetector.Detector()

print("[CTI-Analyzer]\t, Detector's prediction")
for entry in scraped:
    entry['detection'] = detector.getPrediction2(entry["text"])

aptdir = f"output/{apt}"

if not os.path.exists(aptdir):
    os.makedirs(aptdir)
    print(f"Folder '{aptdir}' created.")                                            #DEBUG
else:
    print(f"Folder '{aptdir}' already exists.")                                     #DEBUG

if args.scraper=='naive':
        with open(aptdir+'/output_detector_naive.json', mode='w') as fp:
            json.dump(fp=fp, obj=scraped,indent=4, cls=CustomJSONizer)
else:
    with open(aptdir+'/output_detector.json', mode='w') as fp:
        json.dump(fp=fp, obj=scraped,indent=4, cls=CustomJSONizer)

print("[CTI-Analyzer]\t, Classifier's prediction")
for entry in scraped:
    if entry["detection"]["response"]== True:
        entry["prediction"] = classifier.getKPrediction(entry["text"],k=5)

if args.scraper=='naive':
    with open(aptdir+f'/{apt}_naive.json', mode='w') as fp:
        json.dump(fp=fp, obj=scraped,indent=4, cls=CustomJSONizer)
else:
    with open(aptdir+f'/{apt}.json', mode='w') as fp:
        json.dump(fp=fp, obj=scraped,indent=4, cls=CustomJSONizer)