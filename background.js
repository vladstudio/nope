function setIcon(enabled) {
  const name = enabled ? 'nope-on' : 'nope-off';
  chrome.action.setIcon({
    path: {
      16: `icon/${name}-16.png`,
      32: `icon/${name}-32.png`,
      48: `icon/${name}-48.png`,
      128: `icon/${name}-128.png`
    }
  });
}

function updateRules(enabled, domains) {
  // Remove all existing rules first
  chrome.declarativeNetRequest.getDynamicRules((existing) => {
    const removeIds = existing.map(r => r.id);
    const addRules = [];
    let nextId = 1;

    if (enabled && domains.length) {
      const unique = [...new Set(domains.map(d => d.trim().toLowerCase()).filter(Boolean))];
      unique.forEach((domain) => {
        addRules.push({
          id: nextId++,
          priority: 1,
          action: {
            type: 'redirect',
            redirect: { extensionPath: '/blocked.html' }
          },
          condition: {
            urlFilter: `||${domain}`,
            resourceTypes: ['main_frame']
          }
        });
      });
    }

    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: removeIds,
      addRules
    });
  });
}

// Init on startup
chrome.storage.local.get({ enabled: false, domains: [] }, (data) => {
  setIcon(data.enabled);
  updateRules(data.enabled, data.domains);
});

// React to storage changes
chrome.storage.onChanged.addListener(() => {
  chrome.storage.local.get({ enabled: false, domains: [] }, (data) => {
    setIcon(data.enabled);
    updateRules(data.enabled, data.domains);
  });
});
