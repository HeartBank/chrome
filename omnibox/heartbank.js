document.getElementById("login").addEventListener('click', () => {
  //chrome.extension.getBackgroundPage().console.log('hi');
  //chrome.tabs.create({'url':"pages/heartbank.html"});
  chrome.runtime.openOptionsPage();
}, false);
