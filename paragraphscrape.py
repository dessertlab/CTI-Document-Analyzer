from utilities import paragraph_scraper
import argparse
import json
import os
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

args=parser.parse_args()
apt= os.path.split(args.path)[-1]

scraped = paragraph_scraper.arrange(directory_path=args.path)
filename = f"output/json/{apt}_paragraph.json"
with open(filename, "w") as fp:
    json.dump(obj=scraped, indent=4, fp=fp)