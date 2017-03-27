document.getElementById("save").addEventListener('click', () => {
  chrome.storage.sync.set({
    key:document.getElementById("key").value,
    secret:document.getElementById("secret").value,
    client:document.getElementById("client").value,
    token:document.getElementById("token").value,
    branch:document.getElementById("branch").value,
    customer:document.getElementById("customer").value,
    user:document.getElementById("user").value
  }, () => alert("Your credentials have been saved!"));
}, false);
