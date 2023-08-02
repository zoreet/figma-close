self.addEventListener('message', event => {
  const {req, sender} = event.data;
  if (req && sender) {
    chrome.tabs.remove(sender.tab.id);
  }
});