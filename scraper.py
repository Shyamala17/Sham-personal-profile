from bs4 import BeautifulSoup

# Step 1: Load your own HTML file
with open("sample.html", "r", encoding="utf-8") as file:
    html_content = file.read()

# Step 2: Parse with BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")

# Step 3: Extract headlines (h2 tags)
headlines = [h.get_text(strip=True) for h in soup.find_all("h2")]

# Step 4: Save to a text file
with open("headlines.txt", "w", encoding="utf-8") as f:
    for idx, headline in enumerate(headlines, start=1):
        f.write(f"{idx}. {headline}\n")

print("✅ Headlines extracted and saved to headlines.txt")
