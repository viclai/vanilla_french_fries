window.onload = function() {
  chrome.storage.local.get(['status']).then((result) => {
    document.getElementById('content').innerHTML = result.status;
  });
}
