import pandas as pd
import sys

def clean_repetition(inlist:list)->list:
    cleaned_list=[]
    for entry in inlist:
        if entry not in cleaned_list:
            cleaned_list.append(entry)
    return cleaned_list