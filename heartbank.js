//const HEARTBANK = "https://endpoint.heartbank.cloud";
const HEARTBANK = "http://localhost:8080";

class HeartBank {

  constructor() {

  }

  customers() {
    return fetch(HEARTBANK + '/transact', {mode:'no-cors', credentials:'include', method:'get'}).then(response => response.json());
  }

  transact(transaction) {
    return fetch(HEARTBANK + '/transact', {mode:'no-cors', credentials:'include', method:'post', body:transaction}).then(response => response.json());
  }

}

//chrome.extension.getBackgroundPage().console.log('test');
