from transformers import AutoTokenizer, TFAutoModelForSeq2SeqLM




class Summarizator:

    def __init__(self) -> None:
        print("summarizer intialization")
        self.tokenizer=AutoTokenizer.from_pretrained('T5-base')
        self.model=TFAutoModelForSeq2SeqLM.from_pretrained('T5-base', return_dict=True)

    

    def getSummary(self,text:str )-> str:
        inputs=self.tokenizer.encode("sumarize: " +text,return_tensors='tf', max_length=512, truncation=True)
        output = self.model.generate(inputs, min_length=100, max_length=200)
        summary=self.tokenizer.decode(output[0], clean_up_tokenization_spaces= True, skip_special_tokens=True)
        return(summary)

