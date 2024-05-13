import requests
import time

def webpage_load_time(url):
    try:
        start_time = time.time()
        response = requests.get(url)
        end_time = time.time()
        if response.status_code == 200:
            return end_time - start_time
        else:
            return None
    except Exception as e:
        print(f"Error: {e}")
        return None

# Test the function with multiple websites
websites = ["https://www.google.com", "https://www.ynet.co.il", "https://www.imdb.com"]

for website in websites:
    load_time = webpage_load_time(website)
    if load_time is not None:
        print(f"Time to load {website}: {load_time:.2f} seconds")
    else:
        print(f"Failed to load {website}")
