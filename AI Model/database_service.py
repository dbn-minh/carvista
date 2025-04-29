import mysql.connector

def read_car_data(brand_name):
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="root",
        database="carvista"
    )
    cursor = conn.cursor(dictionary=True)
    query = f"SELECT * FROM cars WHERE brand LIKE '%{brand_name}%'"
    cursor.execute(query)
    rows = cursor.fetchall()
    conn.close()
    return rows
