"""Export the Sustained Performance Lab Slite channel to docs/ as markdown.

Needs SLITE_KEY=<api key> in a .env file at the repo root (never commit it).
Usage: python3 scripts/export_slite.py
"""
import json, os, re, sys, urllib.request
root = sys.argv[1] if len(sys.argv)>1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
key = None
for line in open(os.path.join(root, ".env")):
    if line.startswith("SLITE_KEY="): key = line.split("=",1)[1].strip().strip('"\'')
def get(path):
    r = urllib.request.Request("https://api.slite.com/v1"+path, headers={"x-slite-api-key": key})
    return json.load(urllib.request.urlopen(r))
hits=[]; page=0
while True:
    d=get(f"/search-notes?hitsPerPage=100&page={page}"); hits+=d["hits"]; page+=1
    if page>=d.get("nbPages",1): break
def slug(s): return re.sub(r"[^\w\-. ()&₂]+","",s.strip()).strip().replace(" ","-") or "untitled"
out=os.path.join(root,"docs"); n=0
for h in hits:
    parents=[p["title"] for p in h.get("parentNotes",[])]
    if parents[:1]!=["Sustained Performance Lab"] and h["title"]!="Sustained Performance Lab": continue
    note=get(f"/notes/{h['id']}?format=md")
    d=os.path.join(out,*[slug(p) for p in parents[1:]])
    os.makedirs(d,exist_ok=True)
    fn=os.path.join(d, slug(h["title"])+".md")
    with open(fn,"w") as f:
        f.write(f"---\ntitle: {h['title'].strip()}\nslite_id: {h['id']}\nupdated: {note.get('updatedAt','')}\n---\n\n# {h['title'].strip()}\n\n{note.get('content','')}\n")
    n+=1; print(len(note.get('content','')), fn[len(root)+1:])
print("exported",n)
