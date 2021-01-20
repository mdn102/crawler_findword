import sys, getopt
import requests
# from bs4 import BeautifulSoup
from collections import Counter
from string import punctuation

def crawler(url):
    content = url
    return content 
    

if __name__ == '__main__':
    # Parsing argument
    NUM_WORDS = sys.argv[1]
    EXCLUDE_WORDS = sys.argv[2:]

    print (f"Print total {NUM_WORDS} words")
    print (f"Words that are excluded: {EXCLUDE_WORDS}")
    content = crawler("https://en.wikipedia.org/wiki/Microsoft")
    print(content)
    
    r = requests.get("https://en.wikipedia.org/wiki/Microsoft")
    # soup = BeautifulSoup(r.content)
    text = (''.join(s.findAll(text=True))for s in soup.findAll('p'))
