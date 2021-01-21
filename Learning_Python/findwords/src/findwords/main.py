import sys
import getopt
import urllib.request
from urllib.request import urlopen
from bs4 import BeautifulSoup, Tag
import operator
from collections import Counter
from string import punctuation
import ssl
from collections import defaultdict

ssl._create_default_https_context = ssl._create_unverified_context



def crawler(url):
    wordlist = []
    # read the data from the URL and print it
    index_page = urlopen(url).read()
    scrape_data = BeautifulSoup(index_page, "html.parser")
    # print(scrape_data)
		wordlist = scrape_data.text 
		
		# response = urllib.request.urlopen(url)
		# url_contents = response.read()
  
		# find direct children of a node
		# soup = bs4.BeautifulSoup(url_contents, "html")
		# parent_node = scrape_data.find("div", {"class": "homepage__section__content"})
		# children = parent_node.findChildren("h2", recursive=False)
		# print(children)
  
		# extract text from scrape data
    for script in scrape_data(["script", "style"]):
        script.decompose()
    
    # strips = list(scrape_data.stripped_strings)
    # print(strips[:10])
    
    # history = scrape_data.find(id="History").parent.next_siblings
    # print(history)
    
    # for each_text in scrape_data.findAll('div', {'class': 'entry-content'}):
    #     content = each_text.text
    #     print(content)
    #     words = content.lower().split()
    #     for each_word in words:
    #         wordlist.append(each_word)
    #     # word_list(wordlist)
    #     print(wordlist)

def text_process(content):
    content = """Childhood friends Bill Gates and Paul Allen sought to make a business using their skills in computer programming.[17] In 1972, they founded Traf-O-Data, which sold a rudimentary computer to track and analyze automobile traffic data. Gates enrolled at Harvard University while Allen pursued a degree in computer science at Washington State University, though he later dropped out to work at Honeywell.[18] The January 1975 issue of Popular Electronics featured Micro Instrumentation and Telemetry Systems's(MITS) Altair 8800 microcomputer, [19] which inspired Allen to suggest that they could program a BASIC interpreter for the device. Gates called MITS and claimed that he had a working interpreter, and MITS requested a demonstration. Allen worked on a simulator for the Altair while Gates developed the interpreter, and it worked flawlessly when they demonstrated it to MITS in March 1975 in Albuquerque, New Mexico. MITS agreed to distribute it, marketing it as Altair BASIC.[16]: 108, 112–114 Gates and Allen established Microsoft on April 4, 1975, with Gates as CEO, [20] and Allen suggested the name "Micro-Soft", short for micro-computer software.[21][22] In August 1977, the company formed an agreement with ASCII Magazine in Japan, resulting in its first international office of ASCII Microsoft.[23] Microsoft moved its headquarters to Bellevue, Washington in January 1979.[20] 
    Microsoft entered the operating system(OS) business in 1980 with its own version of Unix called Xenix, [24] but it was MS-DOS that solidified the company's dominance. IBM awarded a contract to Microsoft in November 1980 to provide a version of the CP/M OS to be used in the IBM Personal Computer (IBM PC).[25] For this deal, Microsoft purchased a CP/M clone called 86-DOS from Seattle Computer Products which it branded as MS-DOS, although IBM rebranded it to IBM PC DOS. Microsoft retained ownership of MS-DOS following the release of the IBM PC in August 1981. IBM had copyrighted the IBM PC BIOS, so other companies had to reverse engineer it in order for non-IBM hardware to run as IBM PC compatibles, but no such restriction applied to the operating systems. Microsoft eventually became the leading PC operating systems vendor.[26][27]:210 The company expanded into new markets with the release of the Microsoft Mouse in 1983, as well as with a publishing division named Microsoft Press.[16]:232 Paul Allen resigned from Microsoft in 1983 after developing Hodgkin's disease.[28] Allen claimed in Idea Man: A Memoir by the Co-founder of Microsoft that Gates wanted to dilute his share in the company when he was diagnosed with Hodgkin's disease because he did not think that he was working hard enough.[29] Allen later invested in low-tech sectors, sports teams, commercial real estate, neuroscience, private space flight, and more.[30]"""
    wordlist = content.split()
    # print(wordlist)
    word_list(wordlist)
    # wordListToFreqDict(wordlist)

def word_list(wordlist):
    cleanlist = []
    for word in wordlist:
        symbols = '!@#$%^&*()_-+={[}]|\;:"<>?/., '
        for i in range(0, len(symbols)):
            word = word.replace(symbols[i], '')
        if len(word) > 0:
            cleanlist.append(word)
    # print(cleanlist)
		# return cleanlist
    # dictionary(cleanlist)   
		wordListToFreqDict(cleanlist)

def wordListToFreqDict(cleanlist):
    wordfreq = [cleanlist.count(w) for w in cleanlist]
    print(dict(list(zip(cleanlist, wordfreq))))

# def word_list(wordlist):
#     cleanlist = []
#     for word in wordlist:
#         symbols = '!@#$%^&*()_-+={[}]|\;:"<>?/., '
#         for i in range(0, len(symbols)):
#             word = word.replace(symbols[i], '')
#         if len(word) > 0:
#             cleanlist.append(word)
#     dictionary(cleanlist)

# def dictionary(cleanlist):
#     word_count = {}
#     for word in cleanlist:
#         if word in word_count:
#             word_count[word] += 1
#         else:
#             word_count[word] = 1
#     c = Counter(word_count)
#     # returns the most occurring elements
#     top = c.most_common(10)
#     print(top)


if __name__ == '__main__':
    # Parsing argument
    NUM_WORDS = sys.argv[1]
    EXCLUDE_WORDS = sys.argv[2:]

    print(f"Print total {NUM_WORDS} words")
    print(f"Words that are excluded: {EXCLUDE_WORDS}")

    html = crawler("https://en.wikipedia.org/wiki/Microsoft")
    print(html)
    word_list= text_process(None) 
    wordListToFreqDict(word_list)
    
    
    
    
    
    

    

