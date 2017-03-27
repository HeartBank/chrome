class HeartBank {

  constructor(key, secret, url="http://localhost:8080") {
    this.key = key;
    this.secret = secret;
    this.url = url;
  }

  headers(client=null, token=null) {
    return new Headers({
      Authentication: "Basic " + btoa(this.key + ":" + this.secret),
      Cookie: client && token ? `client=${client}; token=${token}` : ""
    });
  }

  login(form) {
    return fetch(this.url + '/clients/auth', {mode:'no-cors', credentials:'omit', method:'post', body:form, headers:this.headers()}).then(response => response.text());
  }

  transact(client, token, params) {

  }

}

heartbank = new HeartBank("lqs1plB1RzEFf084Wy7Y6Q==", "VAl8JAne4IPtAyD8JOkuehsxGDB9r1Co", "http://localhost:8080");

document.getElementById("login").addEventListener('click', () => {
  heartbank.login(new FormData(document.getElementById('form')))
  .then(data => {
    console.log(data);
    chrome.storage.sync.set({
      client:data.client,
      token:data.token,
      branch:data.branch,
      customer:data.customer
    }, () => alert("logged in!"));
  }).catch(error => console.error(error));
}, false);
