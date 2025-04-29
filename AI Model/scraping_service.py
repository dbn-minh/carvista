import requests
from bs4 import BeautifulSoup


def scrape_car_reviews(brand_name):
    # Ví dụ scraping từ một trang web giả lập
    url = f"https://example.com/reviews/{brand_name.lower()}"
    try:
        response = requests.get(url, timeout=5)
        soup = BeautifulSoup(response.text, 'html.parser')

        reviews = []
        for review_div in soup.find_all("div", class_="review-item"):
            review_text = review_div.text.strip()
            reviews.append(review_text)

        return reviews

    except Exception as e:
        print(f"Error scraping: {e}")
        return []
