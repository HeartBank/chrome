heartbank = new HeartBank("http://localhost:8080");

const transact = (credentials) => {

  heartbank.customers(credentials.branch)
  .then(data => {
    console.log(data);
  }).catch(error => console.error(error));

  document.getElementById("process").addEventListener('click', () => {
    heartbank.transact()
    .then(data => {
      console.log(data);
    }).catch(error => console.error(error));
  }, false);

}

chrome.storage.sync.get({
    key:null,
    secret:null,
    client:null,
    token:null,
    branch:null,
    customer:null,
    user:null
  }, items => transact(items));
