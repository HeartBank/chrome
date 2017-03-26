$('#login').click(function() {
  chrome.extension.getBackgroundPage().console.log('hi2');
  chrome.runtime.openOptionsPage();
});

$('#history').click(function() {
  chrome.tabs.create({'url':"pages/heartbank.html"});
});
