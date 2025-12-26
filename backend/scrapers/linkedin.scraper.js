

const cheerio = require("cheerio");

function scrapeLinkedIn(html) {
  const $ = cheerio.load(html);

  return {
    name: $('meta[property="og:title"]').attr("content") || "",
    headline: $('meta[name="description"]').attr("content") || "",
    note: "LinkedIn uses client-side rendering. Data extracted from meta tags."
  };
}

module.exports = scrapeLinkedIn;

