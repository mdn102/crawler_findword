import requests
from bs4 import BeautifulSoup
import operator
from collections import Counter
from string import punctuation

# We get the url
r = requests.get("https://en.wikipedia.org/wiki/Microsoft")
soup = BeautifulSoup(r.content)

# We get the words within paragrphs
text_p = (''.join(s.findAll(text=True))for s in soup.findAll('p'))
c_p = Counter((x.rstrip(punctuation).lower() for y in text_p for x in y.split()))

# We get the words within divs
text_div = (''.join(s.findAll(text=True))for s in soup.findAll('div'))
c_div = Counter((x.rstrip(punctuation).lower() for y in text_div for x in y.split()))

# We sum the two countesr and get a list with words count from most to less common
total = c_div + c_p
list_most_common_words = total.most_common(10) 