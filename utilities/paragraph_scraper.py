from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextContainer
from io import BytesIO
from os import path
from bs4 import BeautifulSoup
import pathlib
import os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import spacy

from colorama import Fore, Back, Style

def extract_pdf_text(document):
        # with pdfplumber.open(document) as pdf:
        #     text = "".join(page.extract_text() for page in pdf.pages)

        content = []
        for page_layout in extract_pages(document):
            for element in page_layout:
                if isinstance(element, LTTextContainer) and len(element.get_text().split()) > 10:
                    content.append(element.get_text())
        #text = "".join(content)

        # If no text was extracted, then something went wrong.
        # if not text:
        #     raise Exception(
        #         "The file have no readble OCR"
        #     )

        return content

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
        driver.get(url)
        paragraphs = driver.find_elements(By.TAG_NAME,'p')
        cleaned_paragraphs = []
        for paragraph in paragraphs:

            if len(paragraph.text.split())> 10:
                cleaned_paragraphs.append(paragraph.text)
        del(paragraphs)
        driver.close()
        return cleaned_paragraphs
     

def extract_text(document):
        suffix = pathlib.Path(document).suffix
        if suffix == ".pdf":
            text = extract_pdf_text(document)
        elif suffix == ".html":
            text = extract_html_text(document)
        else:
            raise ValueError("Unknown file suffix: %s" % suffix)

        return text

def get_source_files(directory_path:str)-> list:
    files = [file for file in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, file))]
    return files

def arrange(directory_path:str): 

    sources = get_source_files(directory_path)
    final_json=[]
    apt= os.path.split(directory_path)[-1]
    print(Fore.RED+f"[SCRAPER]\t creation of json file for {apt}")                       #DEBUG
    directory_path=os.path.abspath(directory_path)
    #print(directory_path)                                                              #DEBUG

    for source in sources:
        
        paragraphs = extract_text(os.path.join(directory_path, source))
        for paragraph in paragraphs:
            dict_forjson= {}
            #print(cluster)                                                                                 #DEBUG
            prov ={"text": paragraph, "source": source, "summary:":{},"detection":{}, "prediction":{}}
            dict_forjson.update(prov)
            final_json.append(dict_forjson)
    return final_json
    
# import json
# class SpaCyEncoder(json.JSONEncoder):
#     def default(self, obj):
#         if isinstance(obj, spacy.tokens.Span):
#             return {'text': obj.text, 'start': obj.start_char, 'end': obj.end_char, 'label': obj.label_}
#         return json.JSONEncoder.default(self, obj)

# prova = "data/resources/apt29"
# final_json=arrange(prova)
# with open('test.json',mode='w') as fp:
#     json.dump(obj=final_json, indent=4, fp=fp, cls=SpaCyEncoder)