import tensorflow as tf
import pickle
from transformers import AutoTokenizer
import transformers
from sklearn import preprocessing
from pathlib import Path
import os

class Classificator:

    def __init__(self):
        ac_path = os.path.abspath(os.path.dirname(__file__))
        label_path = os.path.join(ac_path, "data/label_encoder.pkl")
        model_path = os.path.join(ac_path, "data/classificator-secbert.h5")
        self.le = preprocessing.LabelEncoder()
        with open(label_path, 'rb') as file:
            self.le = pickle.load(file)
        self.model = tf.keras.models.load_model(
        model_path,
       custom_objects={"TFBertModel": transformers.TFBertModel}
    )
        self.tokenizer = AutoTokenizer.from_pretrained("jackaduma/SecBERT")
        
    def getPrediction(self,text:list)->str:
        """
            Predict the ATT&CK Technique (from Enterprise Matrix) given a sentence
            
            Args:
                text: a list of text input which we want to predict (Recomanded: 1 )
                
            Returns:
                (str): The codes of techniques predicted
        """
        
        inputs= self.tokenizer(text, padding='max_length', max_length = 512, truncation=True, return_tensors='tf')['input_ids']
        prediction_sample= self.model.predict(inputs)
        predicted_class = tf.keras.backend.argmax(prediction_sample[0])
        return(self.le.inverse_transform([predicted_class])[0])
    

    def getKPrediction(self,text:list, k:int)->dict:
        """
            Predict the ATT&CK Technique (from Enterprise Matrix) given a sentence
            
            Args:
                text: a list of text input which we want to predict (Recomanded: 1 )
                
            Returns:
                (str): The codes of techniques predicted
        """
        
        inputs= self.tokenizer(text, padding='max_length', max_length = 512, truncation=True, return_tensors='tf')['input_ids']
        prediction_sample= self.model(inputs,training=False)
        prob_tensor = tf.keras.activations.softmax(prediction_sample,axis=-1)
        top_k_probabilities, top_k_classes = tf.math.top_k(prob_tensor[0], k=k)
        attack_ids=[]
        probabilities=[]
        for classy in top_k_classes:
            attack_ids.append(str(self.le.inverse_transform([classy])[0]))
        for probability in top_k_probabilities:
            probabilities.append(float(probability))
        results= {
                "attack_id":  attack_ids,
                "confidence": probabilities
        }
        return(results)




