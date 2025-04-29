from database_service import read_car_data
from scraping_service import scrape_car_reviews
from data_preprocessing import prepare_context
from ai_service import ask_mistral

def main():
    brand = input("Nhập tên hãng xe (ví dụ: Honda, Toyota...): ").strip()

    # 1. Đọc Database
    db_data = read_car_data(brand)

    # 2. Scrape thêm Review
    web_reviews = scrape_car_reviews(brand)

    # 3. Chuẩn bị Context
    context = prepare_context(db_data, web_reviews)

    # 4. Người dùng nhập câu hỏi
    user_question = input("\nNhập câu hỏi cho AI: ").strip()

    # 5. Tạo Prompt hoàn chỉnh
    final_prompt = f"""
Bạn là một chuyên gia tư vấn ô tô.
Dựa trên dữ liệu bên dưới, hãy trả lời câu hỏi của người dùng một cách tự nhiên, chuyên nghiệp, súc tích:

DỮ LIỆU:
{context}

CÂU HỎI:
{user_question}
"""

    # 6. Gửi prompt cho AI
    answer = ask_mistral(final_prompt)
    print("\n--- Trả lời từ Mistral ---")
    print(answer)

if __name__ == "__main__":
    main()
