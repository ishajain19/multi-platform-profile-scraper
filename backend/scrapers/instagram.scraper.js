const cheerio = require("cheerio");

function scrapeInstagram(html) {
  const $ = cheerio.load(html);
  return {
    username: $('header h2').text().trim() || $('meta[property="og:title"]').attr('content'),
    displayName: $('header h1').text().trim(),
    bio: $('div.-vDIg span').text().trim(),
    followers: $('ul li span').first().attr('title'),
    following: $('ul li span').eq(1).text(),
    posts: $('ul li span').eq(2).text()
  };
}

module.exports = scrapeInstagram;
