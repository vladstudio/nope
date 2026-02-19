function setIcon(enabled) {
  chrome.action.setIcon({ path: enabled ? 'icon/nope-on.png' : 'icon/nope-off.png' });
}

// Set icon on startup
chrome.storage.local.get({ enabled: false }, (data) => setIcon(data.enabled));

// Update icon when storage changes
chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) setIcon(changes.enabled.newValue);
});

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) return;

  chrome.storage.local.get({ enabled: false, domains: [] }, (data) => {
    if (!data.enabled) return;

    let url;
    try { url = new URL(details.url); } catch { return; }
    const host = url.hostname.replace(/^www\./, '');

    const blocked = data.domains.some(d =>
      host === d || host.endsWith('.' + d)
    );

    if (blocked) {
      chrome.tabs.update(details.tabId, {
        url: chrome.runtime.getURL('blocked.html')
      });
    }
  });
});
