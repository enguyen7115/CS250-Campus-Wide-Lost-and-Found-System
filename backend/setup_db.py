import sqlite3

DB_PATH = "lost_found.db"

conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()

# Create table
cursor.execute("""
CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT,
    color TEXT,
    location_found TEXT,
    status TEXT,
    date_reported TEXT
)
""")

# Add sample data
sample_items = [
    ("Black Backpack", "Found near library", "accessories", "black", "Library", "found", "2026-03-15"),
    ("Blue Water Bottle", "Lost in cafeteria", "other", "blue", "Cafeteria", "lost", "2026-03-14"),
    ("Student ID", "Found outside building", "documents", "white", "Science Building", "found", "2026-03-13"),
]

cursor.executemany("""
INSERT INTO items (title, description, category, color, location_found, status, date_reported)
VALUES (?, ?, ?, ?, ?, ?, ?)
""", sample_items)

conn.commit()
conn.close()

print("Database created and sample data inserted.")