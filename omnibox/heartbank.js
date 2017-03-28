const transact = cookies => {

  document.getElementById("login").addEventListener('click', () => {
    //chrome.runtime.openOptionsPage();
    chrome.tabs.create({'url':HEARTBANK + '/login'});
  }, false);

  if (cookies.client) {

    const heartbank = new HeartBank();
    document.getElementById("login").innerHTML = "Welcome, " + cookies.username + "!";

    heartbank.customers().then(data => data.branch.customers.forEach((customer, index) => document.getElementById("to").options[index] = new Option(customer.username, customer.username))).catch(error => console.error(error));

    document.getElementById("process").addEventListener('click', () => {
      heartbank.transact(new FormData(document.getElementById("transaction"))).then(data => document.getElementById("login").innerHTML = data.transaction.customer.balance ? "Your new balance is " + data.transaction.customer.balance : "The family bank reserve now has " + data.transaction.branch.reserve).catch(error => console.error(error));
    }, false);

  }

}

chrome.cookies.getAll({url:HEARTBANK}, cookies => {
  const jar = {};
  cookies.forEach(cookie => jar[cookie.name] = cookie.value);
  transact(jar);
});
