import pdfplumber
import nltk
import numpy as np
import spacy


# Load the Spacy model


def _process(text):
    nlp = spacy.load('en_core_web_sm')
    doc = nlp(text)
    sents = list(doc.sents)
    try: vecs = np.stack([sent.vector / sent.vector_norm for sent in sents])
    except ValueError:
        #print("[VALUE ERROR]this is the text:\n",text)                               #DEBUG
    #print(vecs)                                                                     #DEBUG
        raise ValueError
    return sents, vecs

def _cluster_text(sents, vecs, threshold):
    clusters = [[0]]
    for i in range(1, len(sents)):
        if np.dot(vecs[i], vecs[i-1]) < threshold:
            clusters.append([])
        clusters[-1].append(i)
    
    return clusters

def clean_text(text):
    # Add your text cleaning process here
    return text

def adjacent_clustering(text):
    # Initialize the clusters lengths list and final texts list
    clusters_lens = []
    final_texts = []

    # Process the chunk
    threshold = 0.5
    try: sents, vecs = _process(text)
    except ValueError:
        raise ValueError
    #print(sents)                                                                      #DEBUG

    # Cluster the sentences
    clusters = _cluster_text(sents, vecs, threshold)

    # or each cluster, the sentences are joined into a single text (cluster_txt) and cleaned using the clean_text function. The length of the cleaned text is then calculated.
    for cluster in clusters:
        cluster_txt = clean_text(' '.join([sents[i].text for i in cluster]))
        cluster_len = len(cluster_txt.split())
        
        # Check if the cluster is too short
        if cluster_len < 15:
            continue
        
        # Check if the cluster is too long
        elif cluster_len > 200:
            threshold = 0.7
            sents_div, vecs_div = _process(cluster_txt)
            reclusters = _cluster_text(sents_div, vecs_div, threshold)
            
            for subcluster in reclusters:
                div_txt = clean_text(' '.join([sents_div[i].text for i in subcluster]))
                div_len = len(div_txt.split())
                
                if div_len < 15 or div_len > 200:
                    continue
                
                clusters_lens.append(div_len)
                final_texts.append(div_txt)
                
        else:
            clusters_lens.append(cluster_len)
            final_texts.append(cluster_txt)

    return clusters_lens, final_texts