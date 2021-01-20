import sys
import getopt
import urllib.request
from urllib.request import urlopen
from bs4 import BeautifulSoup
import operator
from collections import Counter
from string import punctuation
import ssl

ssl._create_default_https_context = ssl._create_unverified_context




def crawler(url):
    html = url
    return html 


if __name__ == '__main__':
    # Parsing argument
    NUM_WORDS = sys.argv[1]
    EXCLUDE_WORDS = sys.argv[2:]

    print(f"Print total {NUM_WORDS} words")
    print(f"Words that are excluded: {EXCLUDE_WORDS}")

    content = crawler("https://en.wikipedia.org/wiki/Microsoft")
    print(content)
    

    # read the data from the URL and print it
    text = urlopen(content).read()
    print(text)
    

    

