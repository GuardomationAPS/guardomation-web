#!/usr/bin/env bash
# Fetch all pages and products
set -e
mkdir -p /Users/mike/guardomation-web/scrape-output/raw/pages
mkdir -p /Users/mike/guardomation-web/scrape-output/raw/products
mkdir -p /Users/mike/guardomation-web/scrape-output/raw/cats

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

slugify() {
  echo "$1" | sed -e 's|https://guardomation.com/||' -e 's|/$||' -e 's|/|_|g'
}

fetch_list() {
  local list="$1"
  local outdir="$2"
  while IFS= read -r url; do
    [ -z "$url" ] && continue
    slug=$(slugify "$url")
    [ -z "$slug" ] && slug="index"
    out="$outdir/$slug.html"
    if [ ! -s "$out" ]; then
      curl -s -A "$UA" "$url" -o "$out"
      sleep 0.3
    fi
    echo "fetched: $url -> $out"
  done < "$list"
}

fetch_list /Users/mike/guardomation-web/scrape-output/raw/pages-clean.txt /Users/mike/guardomation-web/scrape-output/raw/pages
fetch_list /Users/mike/guardomation-web/scrape-output/raw/products-clean.txt /Users/mike/guardomation-web/scrape-output/raw/products
fetch_list /Users/mike/guardomation-web/scrape-output/raw/product_cat-urls.txt /Users/mike/guardomation-web/scrape-output/raw/cats
