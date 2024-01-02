from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextContainer
import docx
from io import BytesIO
from os import path
from bs4 import BeautifulSoup
import pathlib
import os
from . import  chunker
import json
import spacy
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import WebDriverException

"""
Script which extract the text from the files give in input. 
"""


def extract_pdf_text(document):
        #[OLD VERSION]- pdf PLUMBER works very bad
        # with pdfplumber.open(document) as pdf:
        #     text = "".join(page.extract_text() for page in pdf.pages)

        content = []
        for page_layout in extract_pages(document):
            for element in page_layout:
                if isinstance(element, LTTextContainer) and len(element.get_text().split()) > 5:
                    content.append(element.get_text())
        text = "".join(content)

        # If no text was extracted, then something went wrong.
        if not text:
            raise Exception(
                "The file have no readble OCR"
            )

        return text

def extract_html_text(document):
        # html = open(document, "r")
        # html = html.read()
        # soup = BeautifulSoup(html, features="html.parser")
        # text = soup.get_text()
        # return text
        options = webdriver.ChromeOptions()
        options.add_argument("--headless=new")
        driver = webdriver.Chrome(options=options,service=Service(ChromeDriverManager().install()))
        url="file://"+document
        #print(url)                                                                                                              #DEBUG
        try: driver.get(url)
        except WebDriverException as e:
            print(f"Cannot open {url}.")
            driver.close()
            return ""
        paragraphs = driver.find_elements(By.TAG_NAME,'p')
        cleaned_paragraphs = []
        for paragraph in paragraphs:
            if len(paragraph.text.split())> 5:
                cleaned_paragraphs.append(paragraph.text)
        del(paragraphs)
        text = "\n".join(cleaned_paragraphs)
        del(cleaned_paragraphs)
        driver.close()
        return text
        

def extract_docx_text(document):
        parsed_docx = docx.Document(BytesIO(document.docfile.read()))
        text = " ".join([paragraph.text for paragraph in parsed_docx.paragraphs])
        return text

def extract_plain_text(document):
        text = document.docfile.read().decode("UTF-8")
        return text


def extract_text(document):
        suffix = pathlib.Path(document).suffix
        if suffix == ".pdf":
            text = extract_pdf_text(document)
        elif suffix == ".docx":
            text = extract_docx_text(document)
        elif suffix == ".html":
            text = extract_html_text(document)
        elif suffix == ".txt":
            text = extract_plain_text(document)
        else:
            raise ValueError("Unknown file suffix: %s" % suffix)

        return text



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
    print(f"creation of json file for {apt}")                                                               #DEBUG
    directory_path=os.path.abspath(directory_path)

    for source in sources:
        
        text = extract_text(os.path.join(directory_path, source))
        try: lens, clusters = chunker.adjacent_clustering(text=text)   
        except ValueError:  
             continue                                          
        for cluster in clusters:
            dict_forjson= {}
            prov ={"text": cluster, "source": source, "detection":{}, "prediction":{}}
            dict_forjson.update(prov)
            final_json.append(dict_forjson)

    #[OLD VERSION] NOW THE JSON SHOULD BE SAVED BY THE CALLING FUNCTION
    #print(json.dumps(final_json,indent=4))
    # filename = f"output/json/{apt}.json"
    # #os.makedirs(os.path.dirname(filename), exist_ok=True)
    # with open(filename, "w") as fp:
    #     json.dump(obj=final_json, indent=4, fp=fp)   
    return final_json

def to_json_naive(directory_path:str):

    sources = get_source_files(directory_path)
    final_json=[]
    apt= os.path.split(directory_path)[-1]
    print(f"creation of  naive-json file for {apt}")                                                        #DEBUG
    directory_path=os.path.abspath(directory_path)

    class SpaCyEncoder(json.JSONEncoder):
        def default(self, obj):
            if isinstance(obj, spacy.tokens.Span):
                return {'text': obj.text, 'start': obj.start_char, 'end': obj.end_char, 'label': obj.label_}
            return json.JSONEncoder.default(self, obj)
    for source in sources:
        
        text = extract_text(os.path.join(directory_path, source))
        #dict_forjson.update({"source": source, "sentences": []})                                           #DEBUG
        try: sents, vecs = chunker._process(text=text)
        except ValueError:  
             continue                                                    
        #print(f"The document \"{source}\" has the following clusters:\t", lens)                            #DEBUG
        for sentence in sents:
            dict_forjson= {}
            #print(cluster)                                                                                 #DEBUG
            prov ={"text": sentence.text, "source": source, "detection":{}, "prediction":{}}
            dict_forjson.update(prov)
            final_json.append(dict_forjson)
            
    #[OLD VERSION] NOW THE JSON SHOULD BE SAVED BY THE CALLING FUNCTION
    #print(json.dumps(final_json,indent=4))
    # filename = f"output/json/{apt}_naive.json"
    # #os.makedirs(os.path.dirname(filename), exist_ok=True)
    # with open(filename, "w") as fp:
    #      json.dump(obj=final_json, indent=4, fp=fp, cls=SpaCyEncoder)

    return final_json


import json
class SpaCyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, spacy.tokens.Span):
            return {'text': obj.text, 'start': obj.start_char, 'end': obj.end_char, 'label': obj.label_}
        return json.JSONEncoder.default(self, obj)

# prova = "data/resources/apt29"
# final_json=to_json(prova)
# with open('test.json',mode='w') as fp:
#     json.dump(obj=final_json, indent=4, fp=fp, cls=SpaCyEncoder)
    
# filee= "/home/d4idalos/01-PhD/02-ML-Pipeline-rebuild/data/resources/apt29/Unit 42 Technical Analysis_ Seaduke.html"
# text=extract_html_text(filee)
# print(text)
