'''--->
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
<---'''

import requests    
import re    
from urllib.parse import urlparse    

class PyCrawler(object):    
    def __init__(self, starting_url):    
        self.starting_url = starting_url    
        self.visited = set()    

    def get_html(self, url):    
        try:    
            html = requests.get(url)    
        except Exception as e:    
            print(e)    
            return ""    
        return html.content.decode('latin-1')    

    def get_links(self, url):    
        html = self.get_html(url)    
        parsed = urlparse(url)    
        base = f"{parsed.scheme}://{parsed.netloc}"    
        links = re.findall('''<a\s+(?:[^>]*?\s+)?href="([^"]*)"''', html)    
        for i, link in enumerate(links):    
            if not urlparse(link).netloc:    
                link_with_base = base + link    
                links[i] = link_with_base    

        return set(filter(lambda x: 'mailto' not in x, links))    

    def extract_info(self, url):    
        html = self.get_html(url)    
        meta = re.findall("<meta .*?name=[\"'](.*?)['\"].*?content=[\"'](.*?)['\"].*?>", html)    
        return dict(meta)    

    def crawl(self, url):    
        for link in self.get_links(url):    
            if link in self.visited:    
                continue    
            self.visited.add(link)    
            info = self.extract_info(link)    

            print(f"""Link: {link}
                Description: {info.get('description')} 
                Keywords: {info.get('keywords')} 
                """)    

            self.crawl(link)    

    def start(self):    
        self.crawl(self.starting_url)    

if __name__ == "__main__":    
    crawler = PyCrawler("https://google.com")     
    crawler.start()