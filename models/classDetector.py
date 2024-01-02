import tensorflow as tf
import numpy as np
import transformers
from transformers import AutoTokenizer
import os


class Detector:



    def __init__(self):
       print("[Detector]: \t\t  Model initializzation]\t\t", 40*'-')                        #DEBUG

       ac_path = os.path.abspath(os.path.dirname(__file__))
     
       model_path = os.path.join(ac_path, "data/detector-bert.keras")
       self.model = tf.keras.models.load_model(
       model_path,
       custom_objects={"TFBertModel": transformers.TFBertModel}
    )
       checkpoint = "bert-base-uncased"
       self.tokenizer = AutoTokenizer.from_pretrained(checkpoint)
    
        
    def getPrediction(self,text:list)->bool:
        """
            Predict if the sentences given in input are related to an ATT&CK technique (True:Yes, False:No)
            
            Args:
                text: a list of text input which we want to predict (Recomanded: 1 )
                
            Returns:
                bool: The boolean decision. Based of the mean of binay predictions
        """

        treshold = 0.5
        inputs= self.tokenizer(text, padding='max_length', max_length = 512, truncation=True, return_tensors='tf')['input_ids']
        prediction= self.model.predict(inputs)
        if np.mean(prediction) <= treshold:
            return False
        return True
    

    def getPrediction2(self,text:list)->dict:
        """
            Predict if the sentences given in input are related to an ATT&CK technique (True:Yes, False:No)
            
            Args:
                text: a list of text input which we want to predict (Recomanded: 1 )
                
            Returns:
                bool: The boolean decision. Based of the mean of binay predictions
        """

        treshold = 0.5
        inputs= self.tokenizer(text, padding='max_length', max_length = 512, truncation=True, return_tensors='tf')['input_ids']
        prediction= self.model.predict(inputs)
        results= {
                "response":  np.mean(prediction) >= treshold,
                "confidence": np.mean(prediction)
        }
        return results


# class DetectorTorch:
#         def __init__(self):
#             #print("[Detector]: \t\t  Model initializzation]\t\t", 40*'-')                        #DEBUG

#             ac_path = os.path.abspath(os.path.dirname(__file__))
#             model_path = os.path.join(ac_path, "data/torch_detector.pt")
#             state_dict = torch.load(model_path, map_location="cpu")
#             self.model.load_state_dict(state_dict)
#             self.model = self.model.to(device='cpu')

#             checkpoint = "jackaduma/SecBERT"
#             self.tokenizer = AutoTokenizer.from_pretrained(checkpoint)
        
            
#         def getPrediction(self,text:list)->bool:
#             """
#                 Predict if the sentences given in input are related to an ATT&CK technique (True:Yes, False:No)
                
#                 Args:
#                     text: a list of text input which we want to predict (Recomanded: 1 )
                    
#                 Returns:
#                     bool: The boolean decision. Based of the mean of binay predictions
#             """
#             inputs = self.tokenizer(text, max_length=512, padding='max_length', truncation=True, return_tensors="pt")
#             with torch.no_grad():
#                     y = self.model(inputs['input_ids']).logits.detach()
#                     p = torch.softmax(y, dim=1)
#                     out = torch.argmax(p).item()
#                     if out == 1: return True
#                     else: return False
