# -*- coding: utf-8 -*-
"""
Created on Sun Nov 17 16:33:09 2019

@author: Administrador
"""

# -*- coding: utf-8 -*-
"""
Created on Sat Nov 16 16:27:06 2019

@author: Administrador
"""

import pandas as pd
import spacy
import networkx as nx
from itertools import combinations
from collections import defaultdict
import operator
import matplotlib.pyplot as plt
import numpy as np
import sqlite3
# from math import log


conn = sqlite3.connect("stackoverflow-red.db")
    
    #
    #listTechnologies= pd.read_csv("tecnologiasstackoverflow.csv" , delimiter=';' ,encoding = 'iso-8859-1')
    #
    #listTechnologies.to_sql('tecnologiasstackoverflow', con=conn, if_exists='append', index=False)
    
    
#df = pd.read_sql_query("SELECT * FROM tag limit 100000 ", conn)


def coocurrence(*inputs):
    com = defaultdict(int)
    
    for named_entities in inputs:
        # Build co-occurrence matrix
        for w1, w2 in combinations(sorted(named_entities), 2):
            com[w1, w2] += 1
            com[w2, w1] += 1  #Including both directions

    result = defaultdict(dict)
    for (w1, w2), count in com.items():
        if w1 != w2:
            result[w1][w2] = {'weight': count}
    return result


def cargadatos(nombrearchivo, show):
    defaultdict(dict,
                {'a': {'b': {'weight': 2}, 'c': {'weight': 3}, 'd': {'weight': 7}},
                 'b': {'a': {'weight': 2}, 'c': {'weight': 2}, 'd': {'weight': 5}},
                 'c': {'a': {'weight': 3}, 'b': {'weight': 2}, 'd': {'weight': 6}},
                 'd': {'a': {'weight': 7},
                  'b': {'weight': 5},
                  'c': {'weight': 6}}})
        
    conn = sqlite3.connect("stackoverflow-red.db")
    
    #
    #listTechnologies= pd.read_csv("tecnologiasstackoverflow.csv" , delimiter=';' ,encoding = 'iso-8859-1')
    #
    #listTechnologies.to_sql('tecnologiasstackoverflow', con=conn, if_exists='append', index=False)
    
    
    df = pd.read_sql_query("SELECT * FROM tag ", conn)
    dftype= pd.read_csv("dataso.csv", sep=";")
    dftype= dftype[dftype['show']==show]
        

    all_ents = defaultdict(int)
    
    for i, doc in df.iterrows():
        for ent in doc:
         
#            if str(ent)=="Sánchez": 
#                ent="Pedro Sánchez"
            if ent != "":
                all_ents[str(ent)] += 1
#            

    
    sorted_ents = sorted(all_ents.items(), key=operator.itemgetter(1), reverse=True)
    #print(sorted_ents)
   
    
    # Making the list of claims
    claim_ents = []
    for i, ents in df.iterrows():
        arrEnt=[]
        for ent in ents:
            if ent !="":# and ent in [x[0] for x in sorted_ents[:5000]]:
                arrEnt.append(ent)
            
   
                
      
        claim_ents.append(arrEnt)
        
    # Keeping only claims with multiple entities
    multi_ent_claims = [c for c in claim_ents if len(c)>1]
    
    # Creating the coocurrance dict
    coocur_edges = coocurrence(*multi_ent_claims)
    
    
    
    # Filter out ents with < min_weight - useful for graph clarity?
    
    def filter_ents_by_min_weight(edges, min_weight):
        coocur_edges_filtered = defaultdict()
        for k1, e in edges.items():
            ents_over_x_weight = {k2: v for k2, v in e.items() if v['weight'] > min_weight}
            if ents_over_x_weight:  # ie. Not empty
                coocur_edges_filtered[k1] = ents_over_x_weight
        return coocur_edges_filtered
    
    
    
    
    # Looking at the most coocurring edges
    
    filtered_edges = filter_ents_by_min_weight(coocur_edges, 2)
    
    
#    coocur_sum = defaultdict(int)
#    for k1, e in filtered_edges.items():
#        for k2, v in e.items():
#            coocur_sum[k1] += v['weight']
    
    #sorted_coocur = sorted(coocur_sum.items(), key=operator.itemgetter(1), reverse=True)

    
    # Getting the data - eg top 30, including only ents with min weight 2
    #top_n = numNodosDestino
   
    
    #top_cooccur = [x[0] for x in sorted_coocur[:top_n]] 
    

    
   # nombrearchivo="stackoverflow"
    
    print(dftype['tec'].tolist())
    datalink=[]
    for k, v in filtered_edges.items():
        
        for k1, v1 in v.items():
        #    print(k,k1)
            #if v1.get("weight")>numNodosOrigen:
            if k1 in dftype['tec'].tolist():
    #            dflinksloc=pd.DataFrame(datalink, columns=['from','to', 'width'])
    #            dflinksloc=dflinksloc[(dflinksloc["from"]==k1)& (dflinksloc["to"]==k)]
    #            print(dflinksloc)
    #            if dflinksloc.empty:
                       
                datalink.append([k,k1, int(v1.get("weight"))])
    
    dflinks=pd.DataFrame(datalink, columns=['from','to', 'width'])
    
    
    
    #dflinks= dflinks[dflinks["from"].isin(top_cooccur)]
   # dflinks= dflinks[dflinks["to"].isin(top_cooccur)]
    #dflinks= dflinks[~dflinks["from"].isin(top_cooccur)]
    
    
    dflinks['width'] =(((dflinks['width']  - dflinks['width'].min()) * (25 - 1)) / (dflinks['width'].max() - dflinks['width'].min())) + 1#1 + (dfnodes['size'] - dfnodes['size'].min()) * 50 / (dfnodes['size'].max() - dfnodes['size'].min())
    dflinks['width'] =dflinks['width'].round(0)
    #
    dflinks['width'] = dflinks['width'].astype(int)
   # dflinks=dflinks[dflinks['width']>=2]
    dflinks=dflinks.sort_values(by=['width'], ascending = False)
    
    dflinks=dflinks.groupby('to').head(10)
    
    dftop_cooccur= dftype# pd.DataFrame(np.array(top_cooccur), columns = ["to"])
    #dftop_cooccur.rename(columns={"tec": "to"})
    dftop_cooccur["to"]=dftop_cooccur["tec"]
    dftop_cooccur['id']=dftop_cooccur.index
    
    dftop_cooccur[["to"]].to_json('Nodesto_'+nombrearchivo+'.json', orient='records' ,  force_ascii=True)
    
    
    dflinks.to_json('Links_'+nombrearchivo+'.json', orient='records' ,  force_ascii=True)
    
    
    dfnodes= pd.DataFrame(np.array(sorted_ents), columns = ["id","size"])
    dfnodes= dfnodes[dfnodes["id"].isin(dflinks['from'].tolist()+dftype['tec'].tolist())]
    dfnodes['font'] = dfnodes['size'].astype(int)
    dfnodes['size'] = dfnodes['size'].astype(int)
    dfnodes['size'] =(((dfnodes['size']  - dfnodes['size'].min()) * (30 - 8)) / (dfnodes['size'].max() - dfnodes['size'].min())) + 8#1 + (dfnodes['size'] - dfnodes['size'].min()) * 50 / (dfnodes['size'].max() - dfnodes['size'].min())
    dfnodes['size'] =dfnodes['size'].round(0)#
    dfnodes['size'] = dfnodes['size'].astype(int)
    
    
    
    
    dfnodes['font'] =(((dfnodes['font']  - dfnodes['font'].min()) * (30 - 20)) / (dfnodes['font'].max() - dfnodes['font'].min())) + 20#1 + (dfnodes['size'] - dfnodes['size'].min()) * 50 / (dfnodes['size'].max() - dfnodes['size'].min())
    dfnodes['font'] =dfnodes['font'].round(0)#
    dfnodes['font'] = dfnodes['font'].astype(int)
    
    
    dic={}
    for k, v in dfnodes.iterrows():
        if v['id'] in dftype['tec'].tolist():
            dic.update({k:{"id": v['id'], "shape":"square", "color": {"border":"rgba(43, 124, 233)", "background":"rgb(151, 194, 252)"}, "size": v['size'], "label": v['id'] ,"font":{"size":v['font']} }})
        else:
            dic.update({k:{"id": v['id'], "shape":"dot", "color": {"border":"rgba(43, 124, 233)", "background":"rgb(255, 253, 245)"}, "size": v['size'], "label": v['id'] ,"font":{"size":v['font']} }})
        
    import json
    with open('nodes_'+nombrearchivo+'.json', 'w') as fp:
        json.dump(dic, fp, ensure_ascii=True)
#
#all_ents=cargadatos('Todos', 0)       
#all_ents=cargadatos('Bases de Datos', 1)
all_ents=cargadatos('Big Data', 2)
all_ents=cargadatos('Business Intelligence', 3)
all_ents=cargadatos('Cloud', 4)
all_ents=cargadatos('Control de versión', 5)
all_ents=cargadatos('Framework desarrollo', 6)
all_ents=cargadatos('Front End', 7)
all_ents=cargadatos('Lenguaje de programación', 8)
all_ents=cargadatos('Machine Learning', 9)
all_ents=cargadatos('Mobile', 10)
all_ents=cargadatos('Sistema operativo', 12)























