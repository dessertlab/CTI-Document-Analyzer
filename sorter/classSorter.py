import pandas as pd
from .utilities.lookup_utilities import tactic_lookup,matrix_index_lookup 
from .utilities.clean_utilities import clean_repetition                               #ricordati il path relativo ... (.)
import sys
import random

class Sorter:

    def __init__(self, tactics_looktable_path:str, index_looktable_path:str, techniques:list) -> None:
        """
        ## Description
        Class that
        ### Parameters.

            - `tactics_looktable_path`, <str> path to the lookup table, a csv in which the technique-tactic match is defined from an ATT&CK Matrix
            - `index_looktable_path`, , <str> path to the lookup table, a csv in which the tactics-sort-index correspondence is defined from a matrix
            - `techniques`, <list> list of techniques for which the corresponding sort-lookup is to be done
        """
        self.techniques=clean_repetition(techniques)
        self.t_lookup_path=tactics_looktable_path
        self.i_lookup_path=index_looktable_path

        
        self.tactics=tactic_lookup(lookup_table_path=self.t_lookup_path,techniques=self.techniques)
        self.indexes=matrix_index_lookup(index_lookup_path=self.i_lookup_path,tactics=self.tactics)
        self.unsorted_table = pd.DataFrame(
        {
          'Technique': self.techniques,
          'Tactic': self.tactics,
          "Index":self.indexes
        })
        self.index_table= self.unsorted_table.sort_values(by=['Index'])
    
#--------------------------------------------------------METODI ACCESSORI----------------------------------------------------------

    def get_unsorted_techniques(self)->list:
        """Returns the list unsorted of technique, the same given in input"""
        return self.unsorted_table["Technique"].to_list()
    
    def get_sorted_techniques(self)->list:
        """Returns the list sorted by specified ATT&CK Matrix (Enterprise is the default)"""
        return list(dict.fromkeys(self.index_table["Technique"].to_list())) 
    
    def get_unsorted_tactics(self)->list:
        """Returns the list unsorted of technique, the same given in input"""
        return list(dict.fromkeys(self.unsorted_table["Tactic"].to_list())) 

    
    def get_sorted_tactics(self)->list:
        """Returns the list sorted by specified ATT&CK Matrix (Enterprise is the default)"""
        return list(dict.fromkeys(self.index_table["Tactic"].to_list()))  
    
    def get_original_Dataframe(self)->pd.core.series.Series:
        """Returns the unsorted matching DataFrame, that also contains the tactics associated to the techniques"""
        return self.unsorted_table
    
    def get_sorted_Dataframe(self)->pd.core.series.Series:
        """Returns the sorted (by specified ATT&CK Matrix) matching DataFrame, that also contains the tactics associated to the techniques"""
        return self.index_table





        