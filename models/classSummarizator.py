#from transformers import AutoTokenizer, TFAutoModelForSeq2SeqLM
import torch
import json 
from transformers import T5Tokenizer, T5ForConditionalGeneration, T5Config
model = T5ForConditionalGeneration.from_pretrained('t5-small')
tokenizer = T5Tokenizer.from_pretrained('t5-small')




class Summarizator:

    def __init__(self) -> None:
        # print("summarizer intialization")
        # self.tokenizer=AutoTokenizer.from_pretrained('T5-base')
        # self.model=TFAutoModelForSeq2SeqLM.from_pretrained('T5-base', return_dict=True)
        self.model = T5ForConditionalGeneration.from_pretrained('t5-small')
        self.tokenizer = T5Tokenizer.from_pretrained('t5-small')
        self.device = torch.device('cpu')

    

    def getSummary(self,text:str )-> str:
        # inputs=self.tokenizer.encode("summarize: " +text,return_tensors='tf', max_length=512, truncation=True)
        # output = self.model.generate(inputs, min_length=20, max_length=200)
        # summary=self.tokenizer.decode(output[0], clean_up_tokenization_spaces= True, skip_special_tokens=True)
        # return(summary)
        preprocess_text = text.strip().replace("\n","")
        t5_prepared_Text = "summarize: "+preprocess_text
        tokenized_text = self.tokenizer.encode(t5_prepared_Text, truncation= True,return_tensors="pt").to(self.device)
        summary_ids = self.model.generate(tokenized_text,
                                            num_beams=14,
                                            no_repeat_ngram_size=2,
                                            min_length=30,
                                            max_length=100,
                                            early_stopping=True)
        summary = self.tokenizer.decode(summary_ids[0], skip_special_tokens=True)
        print("summary submitted")
        return(summary)


