import pandas as pd 
import sys
import random

def tactic_lookup(lookup_table_path:str, techniques:list)->list:
    """
    #English
    ## Description.
    Utility to do tactic lookup from technique code
    ### Parameters.

    - `lookup_table_path`, <str> path to the lookup table, a csv in which the technique-tactic match is defined from an array
    - `techniques`, <list> list of techniques for which the corresponding tactic lookup is to be done
    
    ### Returns
    - <list> , the list of tactics corresponding to the techniques in `techniques`, sorted according to the order of the input list
    # Italian
    ## Descrizione
    Utility per fare il lookup della tattica a partire dal codice della tecnica
    ### Parametri

    - `lookup_table_path`,  <str> path per la tabella di lookup, un csv nel quale è definita la corrispondenza tecnica-tattica a partire da una matrice
    - `techniques`,         <list> lista delle tecniche per le quali si vuole fare il lookup della tattica corrispondente
    
    ### Returns
    - <list>    , la lista delle tattiche corrispondenti alle tecniche in `techniques`, ordinate secondo l'odine della lista in ingresso

    """
    try:
        lookup_csv = open(lookup_table_path,"r")
    except OSError:

            print ("Could not open file",lookup_table_path)
            sys.exit()

    lookup_table = pd.read_csv(filepath_or_buffer= lookup_csv,           # Lookup table for fetch the the tactics corresponding to the technique
                                header= 0,
                                index_col= 0                             # Parse into a datafreme indexed by ATT&CK Technique (Enterprise) 
                                )
    tactics = [] 

    #-------------------------------------------------------------------------------TACTICS LOOKUP----------------------------------------------
    """
    Diciamo che qua ho fatto un mezzo imbroglio, essendo che vi sono tecniche presenti in più tattiche qualora vi fosse questa situazione
    ne prendo una casualmente (Confrontati con i professori, non mi piace moltissimo questa cosa) lo faccio attraverso un problema del metodo
    `at` essendo che restituisce una stringa quando la corripondenza è singola e un Dataframe quando la corrispondenza è multipla 
    """
    for row in techniques:
        try:
            tec = lookup_table.at[row,'Enterprise Tactic']                           # Vi è un problema sul fatto che una tecnica potrebbe ricadere in più tattiche
            if type(tec)== str:
                    tactics.append(tec)
            elif type(tec) == pd.core.series.Series:
                tec_list = tec.tolist()
                rnd_tech= random.choice(tec_list)
                tactics.append(rnd_tech)
            
        except KeyError as e:
            print(f"There is no: {e} technique in the ATT&CK Enterprise Matrix")
            exit(1)


    return tactics

def matrix_index_lookup(index_lookup_path:str, tactics:str)->list:
    """
    # English
    ## Description.
    Utility to do the lookup of the order of the tactic in the desired ATT&CK matrix.
    ### Parameters.

    - `index_lookup_path`, <str> path to the lookup table, a csv in which the tactics-sort-index correspondence is defined from a matrix
    - `tactics`, <list> list of tactics for which the sort index is requested 
    
    ### Returns
    - <list> , list of sorting indices, sorted according to the input list
    # Italian
    ## Descrizione
    Utility per fare il lookup dell'ordine della tattica nella matrice ATT&CK desiderata
    ### Parametri

    - `index_lookup_path`,  <str> path per la tabella di lookup, un csv nel quale è definita la corrispondenza tattica-indice di ordinamento a partire da una matrice
    - `tactics`,            <list> lista delle tattiche per le quali si richiede l'indice di ordinamento 
    
    ### Returns
    - <list>    , lista degli indici di ordinamento, ordinati secondo la lista di input
    """
    try:
        sort_csv = open(index_lookup_path,"r")
    except OSError:

        print ("Could not open file",index_lookup_path)
        sys.exit()

    sort_table = pd.read_csv(filepath_or_buffer= sort_csv,
                                header= 0,
                                index_col= 0  
                                )
    indexes = []
    for row in tactics:
      try:
         indexes.append(sort_table.at[row,'Index'])                           # Vi è un problema sul fatto che una tecnica potrebbe ricadere in più tattiche
        
      except KeyError as e:
        print(f"There is no: {e} tactic in the ATT&CK Enterprise Matrix")
        exit(1)
     
    return indexes