from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import sqlite3
import os

app = FastAPI(title="UNIFOTEC-WEB Backend")

# Enable CORS for Next.js
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "unifotec.db"

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()

    # Hero Settings
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS hero (
        id INTEGER PRIMARY KEY,
        title TEXT,
        subtitle TEXT
    )
    ''')

    # Services
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        content TEXT,
        category TEXT,
        icon TEXT,
        energy INTEGER,
        status TEXT
    )
    ''')

    # Team
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS team (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        role TEXT,
        sub TEXT,
        avatar TEXT
    )
    ''')

    # Seed initial data
    cursor.execute("SELECT COUNT(*) FROM hero")
    if cursor.fetchone()[0] == 0:
        cursor.execute("INSERT INTO hero (id, title, subtitle) VALUES (1, ?, ?)",
                       ("Technology That Connects Businesses to the Digital World",
                        "We provide website development, mobile application development, software solutions, IT services, digital platforms, and technology support for businesses, organizations, institutions, and entrepreneurs."))

    cursor.execute("SELECT COUNT(*) FROM services")
    if cursor.fetchone()[0] == 0:
        services = [
            ("Web Development", "Modern, responsive and secure websites for all devices using Next.js and React.", "Web", "Monitor", 100, "completed"),
            ("Mobile Apps", "Android, iOS and cross-platform apps built with Flutter and React Native.", "Mobile", "Smartphone", 95, "completed"),
            ("Custom Software", "Tailored solutions for your business needs, from CRM to ERP systems.", "Software", "Settings", 85, "in-progress"),
        ]
        cursor.executemany("INSERT INTO services (title, content, category, icon, energy, status) VALUES (?, ?, ?, ?, ?, ?)", services)

    conn.commit()
    conn.close()

init_db()

# Pydantic Models
class HeroData(BaseModel):
    title: str
    subtitle: str

class ServiceItem(BaseModel):
    id: Optional[int] = None
    title: str
    content: str
    category: str
    icon: str
    energy: int
    status: str

class TeamMember(BaseModel):
    id: Optional[int] = None
    name: str
    role: str
    sub: str
    avatar: str

# Endpoints
@app.get("/api/hero", response_model=HeroData)
async def get_hero():
    conn = get_db_connection()
    row = conn.execute("SELECT title, subtitle FROM hero WHERE id = 1").fetchone()
    conn.close()
    return dict(row)

@app.post("/api/hero")
async def update_hero(data: HeroData):
    conn = get_db_connection()
    conn.execute("UPDATE hero SET title = ?, subtitle = ? WHERE id = 1", (data.title, data.subtitle))
    conn.commit()
    conn.close()
    return {"message": "Hero updated successfully"}

@app.get("/api/services", response_model=List[ServiceItem])
async def get_services():
    conn = get_db_connection()
    rows = conn.execute("SELECT * FROM services").fetchall()
    conn.close()
    return [dict(row) for row in rows]

@app.post("/api/services")
async def add_service(item: ServiceItem):
    conn = get_db_connection()
    cursor = conn.execute(
        "INSERT INTO services (title, content, category, icon, energy, status) VALUES (?, ?, ?, ?, ?, ?)",
        (item.title, item.content, item.category, item.icon, item.energy, item.status)
    )
    conn.commit()
    new_id = cursor.lastrowid
    conn.close()
    return {"id": new_id, "message": "Service added"}

@app.put("/api/services/{service_id}")
async def update_service(service_id: int, item: ServiceItem):
    conn = get_db_connection()
    conn.execute(
        "UPDATE services SET title=?, content=?, category=?, icon=?, energy=?, status=? WHERE id=?",
        (item.title, item.content, item.category, item.icon, item.energy, item.status, service_id)
    )
    conn.commit()
    conn.close()
    return {"message": "Service updated"}

@app.delete("/api/services/{service_id}")
async def delete_service(service_id: int):
    conn = get_db_connection()
    conn.execute("DELETE FROM services WHERE id=?", (service_id,))
    conn.commit()
    conn.close()
    return {"message": "Service deleted"}

@app.get("/api/team", response_model=List[TeamMember])
async def get_team():
    conn = get_db_connection()
    rows = conn.execute("SELECT * FROM team").fetchall()
    conn.close()
    return [dict(row) for row in rows]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
