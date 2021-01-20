import sys, getopt
import urllib.request
from urllib.request import urlopen
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

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
    
    # read the data from the URL and print it
    file = urlopen(content)
    data = file.read()
    print(data)
    
