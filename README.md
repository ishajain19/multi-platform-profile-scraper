Multi-Platform Profile Scraper (Chrome Extension + Node.js)
📌 Project Overview

This project is a Chrome Extension + Node.js backend system designed to scrape profile information from multiple platforms (LinkedIn & Instagram) in a scalable and ethical way.

👉 The Chrome extension does NOT scrape data itself.
👉 It only captures the HTML of the currently opened profile page and sends it to the backend.
👉 The backend decides the platform and applies platform-specific scraping logic.

This architecture ensures:
Clean separation of concerns
Better scalability
Easy addition of new platforms in the future

🏗️ Architecture Overview
Chrome Extension (Frontend)
        |
        |  (URL + Full HTML)
        ↓
Node.js Backend (Express)
        |
        |  Platform Detection
        ↓
Platform-Specific Scrapers
(LinkedIn / Instagram)

🧩 Tech Stack
Frontend (Chrome Extension)
HTML
CSS
JavaScript
Chrome Extension APIs (Manifest V3)
chrome.tabs
chrome.scripting
Backend
Node.js
Express.js
Cheerio (HTML parsing)
CORS

✨ Key Features

✅ Works on LinkedIn and Instagram profiles

✅ No direct scraping from extension (safe & clean)

✅ Backend-driven platform detection

✅ Easily extendable to new platforms

✅ Lightweight & fast execution
