def prepare_context(db_data, web_reviews):
    context = ""

    # Thông tin từ Database
    context += "Thông tin xe:\n"
    for car in db_data:
        context += f"- Tên xe: {car.get('name', 'N/A')}, Giá: {car.get('price', 'N/A')}, Loại: {car.get('type', 'N/A')}\n"

    # Review từ Web
    context += "\nĐánh giá từ người dùng:\n"
    for review in web_reviews[:5]:
        context += f"- {review}\n"

    return context
