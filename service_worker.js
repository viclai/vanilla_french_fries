chrome.runtime.onInstalled.addListener(function(details) {
  const { previousVersion, reason } = details;
  console.log('### onInstalled', details);
  let status = reason;

  if (reason === 'update') {
    status += ` from ${previousVersion}`;
  }

  chrome.storage.local.set({ status });
});
