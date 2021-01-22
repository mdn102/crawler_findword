import sys
import getopt
import requests
import sys
from bs4 import BeautifulSoup
from collections import Counter


def crawler(url):
    """
    The crawler function is used to pull all html content from url and converted into html object using BeautifulSoup
    I first find the top level of content tag that includes all the content.
    I then find the starting position by searching for the tag that has ID as History and
    then I find the tag that has ID as Corporate_affairs. Between these tag, I add all the text
    to the string raw content.
    :param url:
    :return: raw test of the content under history section.
    """
    # Getting context from url
    raw_code = requests.get(url)
    soup = BeautifulSoup(raw_code.text, "html.parser")
    all_content_node = soup.find(
        "div", {"class": "mw-parser-output"}).findChildren()
    start = False
    raw_content = ""
    for child in all_content_node:
        if child.attrs.get("id", "") == "History":
            start = True
        if child.attrs.get("id", "") == "Corporate_affairs":
            break
        if start:
            raw_content += child.get_text()

    return raw_content


def process_words(content_string, exclude_words, max_words):
    """
    This function is used to process all the text from crawler. It first split all the words to the list.
    Then processing the list by making sure the word is not from excluded word and then I use count function to
    count number of words in the list. I then use the Counter class from collections to sort and find most common
    word and return top number of common words
    :param content_string: raw content from crawler
    :param exclude_words: the excluded words list
    :param max_words: total number of words need to returns.
    :return:
    """
    word_list = content_string.split()
    all_common_words = {}
    for word in word_list:
        if word not in exclude_words:
            all_common_words[word] = word_list.count(word)

    return Counter(all_common_words).most_common(max_words)


if __name__ == '__main__':
    # Parsing argument
    NUM_WORDS = sys.argv[1]
    EXCLUDE_WORDS = sys.argv[2:]

    print(f"Print total {NUM_WORDS} words")
    print(f"Words that are excluded: {EXCLUDE_WORDS}")
    print(f"Print total {NUM_WORDS} words")
    print(f"Words that are excluded: {EXCLUDE_WORDS}")
    content = crawler("https://en.wikipedia.org/wiki/Microsoft#History")
    common_words = process_words(content, EXCLUDE_WORDS, int(NUM_WORDS))

    print("*********************************")
    for word in common_words:
        print(word[0], " : ",  word[1], " ")
