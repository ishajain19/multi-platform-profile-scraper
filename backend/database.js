const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./profiles.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT,
    url TEXT,
    data TEXT
  )`);
});

module.exports = db;

