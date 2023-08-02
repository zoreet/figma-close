console.log("This prints to the console of the service worker (background script)")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.closeTab) {
    chrome.tabs.remove(sender.tab.id);
  }
});