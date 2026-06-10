#!/usr/bin/env python3
import re

with open('/Users/mike/guardomation-web/scrape-output/raw/home.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find nav menus
navs = re.findall(r'<nav[^>]*>(.*?)</nav>', html, re.DOTALL)
print(f"Found {len(navs)} nav blocks")
for i, nav in enumerate(navs):
    print(f"--- NAV {i} ---")
    items = re.findall(r'<a[^>]*href="([^"]+)"[^>]*>([^<]+)</a>', nav)
    for u, t in items:
        t = t.strip()
        if t:
            print(f"  {t} -> {u}")

# Find footer
print("\n=== FOOTER LINKS ===")
foot = re.search(r'<footer[^>]*>(.*?)</footer>', html, re.DOTALL)
if foot:
    items = re.findall(r'<a[^>]*href="([^"]+)"[^>]*>([^<]+)</a>', foot.group(1))
    for u, t in items:
        t = t.strip()
        if t:
            print(f"  {t} -> {u}")

# Find phone numbers
print("\n=== PHONES/EMAILS ===")
phones = re.findall(r'\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}', html)
print(f"phones: {set(phones)}")
emails = re.findall(r'[\w.+-]+@[\w-]+\.[\w.-]+', html)
print(f"emails: {set(emails)}")
