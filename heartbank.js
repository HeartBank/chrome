const HEARTBANK = "https://kiitos.heartbank.cloud";
//const HEARTBANK = "http://localhost:8080";

class HeartBank {

  constructor(url=HEARTBANK) {
    this.url = url;
  }

  customers() {
    return fetch(this.url + '/bank', {mode:'cors', credentials:'include', method:'get'}).then(response => response.json());
  }

  transact(transaction) {
    return fetch(this.url + '/bank', {mode:'cors', credentials:'include', method:'post', body:transaction}).then(response => response.json());
  }

}

//chrome.extension.getBackgroundPage().console.log('test');
