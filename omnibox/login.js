document.getElementById("login").addEventListener('click', () => {
  chrome.tabs.create({'url':HEARTBANK + '/login'});
}, false);
