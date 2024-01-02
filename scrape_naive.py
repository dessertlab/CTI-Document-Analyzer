import os
from utilities import scraper, chunker
import json
import spacy




#---------------------------------------------------------FUNCTIONS
def get_source_files(directory_path:str)-> list:
    files = [file for file in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, file))]
    return files



apt='data/resources/sandworm'
sources = get_source_files(apt)
final_json=[]

class SpaCyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, spacy.tokens.Span):
            return {'text': obj.text, 'start': obj.start_char, 'end': obj.end_char, 'label': obj.label_}
        return json.JSONEncoder.default(self, obj)
for source in sources:
    
    text = scraper.extract_text(apt+'/'+source)
    #dict_forjson.update({"source": source, "sentences": []})                                           #DEBUG
    sents, vecs = chunker._process(text=text)                                                
    #print(f"The document \"{source}\" has the following clusters:\t", lens)                             #DEBUG
    for sentence in sents:
        dict_forjson= {}
        #print(cluster)                                                                                 ##DEBUG
        prov ={"text": sentence.text, "source": source, "detection":{}, "prediction":{}}
        dict_forjson.update(prov)
        final_json.append(dict_forjson)
        

print(json.dumps(final_json,indent=4))

with open('sandworm_naive.json',mode='w') as fp:
    json.dump(obj=final_json, indent=4, fp=fp, cls=SpaCyEncoder)