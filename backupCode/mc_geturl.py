import json
import requests
from bs4 import BeautifulSoup as bs4
from DrissionPage import ChromiumPage
page = ChromiumPage()
head = {
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
}
with open('./backupCode/mc_data.json',"r",encoding="utf-8") as fp:
    mcdata = json.load(fp)
for cl in mcdata:
    for ur in cl["sites"]:
        url = ur["url"]
        tab = page.new_tab(url)
        html = tab.html
        tab.close()
        # html = requests.get(url,headers=head).text
        soup = bs4(html,'html.parser')
        href = soup.find("a",class_="btn btn-arrow")["href"]
        ur["url"] = href
        print(href)
with open('./backupCode/new_mc_data.json',"w",encoding="utf-8") as fp:
    json.dump(mcdata,fp,ensure_ascii=False,indent=4)
    