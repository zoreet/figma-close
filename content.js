console.log('say something', chrome.runtime);

setTimeout(function() {
  chrome.runtime.sendMessage({ closeTab: true });
}, 3000);