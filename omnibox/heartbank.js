const transact = cookies => {

  const heartbank = new HeartBank();

  heartbank.customers()
  .then(data => {
    console.log(data);
  }).catch(error => console.error(error));

  document.getElementById("process").addEventListener('click', () => {
    heartbank.transact(new FormData(document.getElementById("transaction")))
    .then(data => {
      console.log(data);
    }).catch(error => console.error(error));
  }, false);

  document.getElementById("login").addEventListener('click', () => {
    //chrome.runtime.openOptionsPage();
    chrome.tabs.create({'url':HEARTBANK + '/login'});
  }, false);

}

chrome.cookies.getAll({url:HEARTBANK}, cookies => {
  const jar = {};
  cookies.forEach(cookie => jar[cookie.name] = cookie.value);
  transact(jar);
});
