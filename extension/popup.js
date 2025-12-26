
document.getElementById("sendBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: () => document.documentElement.outerHTML
    },
    async (result) => {
      const html = result[0].result;

      const res = await fetch("http://localhost:3000/scrape-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: tab.url,
          html
        })
      });

      const data = await res.json();

      document.getElementById("output").textContent =
        JSON.stringify(data, null, 2);
    }
  );
});
