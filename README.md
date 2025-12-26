🚀 Multi-Platform Profile Scraper (Chrome Extension + Node.js)

A clean and scalable profile scraping system built using a Chrome Extension (Manifest V3) and a Node.js backend, where the frontend only sends raw HTML and the backend intelligently decides how to extract data based on the platform.

This project demonstrates clear separation of concerns, backend parsing logic, and real-world scraping architecture.

📌 Project Overview

This project allows users to:

Open a LinkedIn or Instagram profile

Click a button in the Chrome extension

Send the entire HTML of the page to the backend

Let the backend detect the platform and scrape relevant profile data

⚠️ Important:
The Chrome extension does not scrape data directly — it only captures HTML and sends it securely to the backend.

🧠 Architecture (Key Concept)
Browser Page
     ↓
Chrome Extension (HTML Capture)
     ↓
Node.js Backend (Platform Detection)
     ↓
Platform-specific Scraper Logic
     ↓
Structured JSON Response

✨ Features

✅ Manifest V3 Chrome Extension

✅ No client-side scraping (safe & scalable)

✅ Platform detection using URL patterns

✅ Separate scraping logic for:

LinkedIn

Instagram

✅ Clean JSON response

✅ Easy to extend for more platforms

✅ Interview-friendly system design

🛠️ Tech Stack
Frontend (Chrome Extension)

HTML

CSS

JavaScript

Chrome Extension API (Manifest V3)

Backend

Node.js

Express.js

Cheerio (HTML parsing)

CORS

📂 Folder Structure
profile-scraper/
│
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── scrape.js
│   ├── utils/
│   │   └── platformDetector.js
│   ├── scrapers/
│   │   ├── linkedinScraper.js
│   │   └── instagramScraper.js
│
├── README.md

🚀 How It Works

User opens a LinkedIn or Instagram profile

Clicks “Send Page to Backend” in the extension popup

Extension:

Captures document.documentElement.outerHTML

Sends { url, html } to backend API

Backend:

Detects platform from URL

Uses appropriate scraper logic

Returns structured profile data

Data is displayed inside the extension popup

🔧 Setup Instructions
1️⃣ Backend Setup
cd backend
npm install
node server.js


Backend runs at:

http://localhost:3000

2️⃣ Chrome Extension Setup

Open Chrome and go to

chrome://extensions/


Enable Developer mode

Click Load unpacked

Select the extension folder

Open a LinkedIn or Instagram profile

Click the extension icon → Send Page to Backend . 
