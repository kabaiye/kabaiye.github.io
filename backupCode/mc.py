from bs4 import BeautifulSoup
import re
import os

# 读取 HTML 文件
with open('mc.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, 'html.parser')

# 存储最终的数据结构
site_data = []

# 所有分类标题（<h4>标签）
category_sections = soup.find_all('h4')

for h4 in category_sections:
    # 提取分类名并清理无用符号
    category_name = h4.get_text(strip=True).replace(' ', '')
    
    # 查找当前分类下的 row 容器（即后面跟着的 <div class="row">）
    next_row = h4.find_next('div', class_='row')
    if not next_row:
        continue
    
    sites = []
    cards = next_row.find_all('div', class_='xe-card')
    
    for card in cards:
        link_elem = card.find('a', href=True)
        if not link_elem:
            continue
        
        # 获取站点名称和链接
        name = link_elem.find('strong')
        name = name.get_text(strip=True) if name else "未知站点"
        url = link_elem['href']
        src = link_elem.find('img')['src']

        # 获取描述
        desc_div = link_elem.find('p', class_='overflowClip_2')
        desc = desc_div.get_text(strip=True) if desc_div else ""

        # 构造 logo 路径（统一使用 ../assets/images/mc_img 下的图片）
        logo_filename = src.split('/')[-1]  # 替换空格避免路径问题
        logo_path = f"../assets/images/mc_img/{logo_filename}"

        sites.append({
            "name": name,
            "url": url,
            "logo": logo_path,
            "desc": desc
        })

    site_data.append({
        "category": category_name,
        "icon": "linecons-tag",  # 固定值，与原 data.js 一致
        "sites": sites
    })


# 输出结果以验证
import json
print(json.dumps(site_data, ensure_ascii=False, indent=2))

# 如果需要保存为 JSON 或 JS 文件
with open('parsed_mc_data.json', 'w', encoding='utf-8') as f:
    json.dump(site_data, f, ensure_ascii=False, indent=2)

# 如果你希望输出类似 data.js 的 JavaScript 格式
js_code = f"const siteData = {json.dumps(site_data, ensure_ascii=False, indent=2)};"
with open('parsed_mc_data.js', 'w', encoding='utf-8') as f:
    f.write(js_code)