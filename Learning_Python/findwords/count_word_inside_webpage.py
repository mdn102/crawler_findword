'''--->
# get the url
r = requests.get("https://en.wikipedia.org/wiki/Microsoft")
soup = BeautifulSoup(r.content)

# get the words within paragrphs
text_p = (''.join(s.findAll(text=True))for s in soup.findAll('p'))
c_p = Counter((x.rstrip(punctuation).lower() for y in text_p for x in y.split()))

# get the words within divs
text_div = (''.join(s.findAll(text=True))for s in soup.findAll('div'))
c_div = Counter((x.rstrip(punctuation).lower() for y in text_div for x in y.split()))

# sum the two countesr and get a list with words count from most to less common
total = c_div + c_p
list_most_common_words = total.most_common(10) 
<---'''


from collections import defaultdict
from bs4 import BeautifulSoup, Tag
import requests


def find_most_common():
    page = requests.get("https://en.wikipedia.org/wiki/Microsoft")
    soup = BeautifulSoup(page.text, "html.parser")
    #soup = [s.extract() for s in soup('script')]
    history = soup.find(id="History").parent.next_siblings
    max_count = 0
    max_word = ""
    dd = defaultdict(int)
    for elem in history:
        if isinstance(elem, Tag):
            if elem.name == "h2":
                print(max_word, "is the most common")
                return max_count
            words = elem.get_text().split()
            for word in words:
                dd[word] += 1
                if dd[word] > max_count:
                    max_count = dd[word]
                    max_word = word
    return "Error"


print(find_most_common())


# # Driver code
# if __name__ == '__main__':
#     my_start("https://en.wikipedia.org/wiki/Microsoft")


