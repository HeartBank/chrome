//chrome.extension.getBackgroundPage().console.log('test');
//chrome.tabs.create({'url':"pages/heartbank.html"});
//chrome.runtime.openOptionsPage();

class HeartBank {

  constructor(url="https://endpoint.heartbank.cloud") {
    this.url = url;
  }

  cookie(name) {
    chrome.cookies.get({name, url:this.url}, cookie => {
        chrome.storage.sync.set({name:cookie.value});
    });
  }

  customers(branch) {
    return fetch(this.url + '/branches/' + branch, {mode:'no-cors', credentials:'include', method:'get', body:null}).then(response => response.json());
  }

  transact(client, token, body) {

  }

}
