
const express = require("express");
const router = express.Router();
const scrapeLinkedIn = require("./scrapers/linkedin.scraper");
const db = require("./database");

router.post("/scrape-profile", (req, res) => {
  const { url, html } = req.body;

  let platform = "";
  let data = {};

  if (url.includes("linkedin.com/in/")) {
    platform = "linkedin";
    data = scrapeLinkedIn(html);
  } else {
    return res.status(400).json({ error: "Unsupported URL" });
  }

  db.run(
    "INSERT INTO profiles (platform, url, data) VALUES (?, ?, ?)",
    [platform, url, JSON.stringify(data)],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({
        platform,
        data,
        id: this.lastID
      });
    }
  );
});

router.get("/profiles", (req, res) => {
  db.all("SELECT * FROM profiles", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

module.exports = router;
