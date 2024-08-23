chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.tabs.get(tabId, function (tab) {
    if (tab.pinned) {
      chrome.tabs.executeScript(tabId, { file: "content.js" });
    }
  });
});