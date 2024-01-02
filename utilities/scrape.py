import os
from . import scraper, chunker
import json
import spacy
""" DESIRED FORMAT
{
    "text":     "cluster content", -> str
    "source":   "title of the source file", ->str
    "detection":{
                "response":     "detector's response", ->bool
                "confidence":   "detector's score" -> float
    },
    "prediction":{
                "techniques":   "[Techniques list]", -> list(str)
                "confidence":   "[confidence list]" -> list(float)
    }
},
"""
#---------------------------------------------------------FUNCTIONS
def get_source_files(directory_path:str)-> list:
    files = [file for file in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, file))]
    return files

def to_json(directory_path:str):

    sources = get_source_files(directory_path)
    final_json=[]
    apt= os.path.split(directory_path)[-1]
    print(f"creation of json file for {apt}")               #DEBUG
    print(directory_path)

    for source in sources:
        
        text = scraper.extract_text(directory_path+'/'+source)
        #dict_forjson.update({"source": source, "sentences": []})                                           #DEBUG
        lens, clusters = chunker.adjacent_clustering(text=text)                                                
        #print(f"The document \"{source}\" has the following clusters:\t", lens)                            #DEBUG
        for cluster in clusters:
            dict_forjson= {}
            #print(cluster)                                                                                 #DEBUG
            prov ={"text": cluster, "source": source, "detection":{}, "prediction":{}}
            dict_forjson.update(prov)
            final_json.append(dict_forjson)

    #print(json.dumps(final_json,indent=4))
    filename = f"output/json/{apt}.json"
    #os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, "w") as fp:
        json.dump(obj=final_json, indent=4, fp=fp)

  
        
    
    return final_json

def to_json_naive(directory_path:str):

    sources = get_source_files(directory_path)
    final_json=[]
    apt= os.path.split(directory_path)[-1]
    print(f"creation of  naive-json file for {apt}")               #DEBUG

    class SpaCyEncoder(json.JSONEncoder):
        def default(self, obj):
            if isinstance(obj, spacy.tokens.Span):
                return {'text': obj.text, 'start': obj.start_char, 'end': obj.end_char, 'label': obj.label_}
            return json.JSONEncoder.default(self, obj)
    for source in sources:
        
        text = scraper.extract_text(directory_path+'/'+source)
        #dict_forjson.update({"source": source, "sentences": []})                                           #DEBUG
        sents, vecs = chunker._process(text=text)                                                
        #print(f"The document \"{source}\" has the following clusters:\t", lens)                             #DEBUG
        for sentence in sents:
            dict_forjson= {}
            #print(cluster)                                                                                 ##DEBUG
            prov ={"text": sentence.text, "source": source, "detection":{}, "prediction":{}}
            dict_forjson.update(prov)
            final_json.append(dict_forjson)
            

    #print(json.dumps(final_json,indent=4))
    filename = f"output/json/{apt}_naive.json"
    #os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, "w") as fp:
         json.dump(obj=final_json, indent=4, fp=fp, cls=SpaCyEncoder)

    return final_json