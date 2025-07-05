from tkinter import messagebox 
from tkinter import *
from tkinter import simpledialog 
import tkinter
import matplotlib.pyplot as plt 
import numpy as np
import os
from tkinter import ttk
from tkinter import filedialog 
import pandas as pd
from sklearn.model_selection import train_test_split 
from string import punctuation
from nltk.corpus import stopwords 
import nltk
nltk.download('stopwords')
nltk.download('wordnet')
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer 
from sklearn.metrics import accuracy_score
from sklearn import svm
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier 
from sklearn.linear_model import LogisticRegression 
from sklearn.neighbors import KNeighborsClassifier 
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import hamming_loss
import tkinter as tk
from tkinter import messagebox
from tkinter import font
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import pandas as pd
import tkinter.font as tkFont
from PIL import Image, ImageTk
from sklearn.feature_selection import SelectKBest, chi2
#main tikenter window
main =Tk()
#title of main window
main.title('Classification of Online Toxic Comments Using Machine Learning Algorithms')
#size of main window
main.geometry('1300x1200')
# Global variables to store accuracy, loss, text data, and classifier models
accuracy = []
loss = []
textdata = []
X_train, X_test, y_train, y_test = None, None, None, None
classifier1, classifier2, classifier3, classifier4, classifier5, classifier6 = None, None, None, None, None, None
tfidf_vectorizer = None
filename = None
previous_state = []