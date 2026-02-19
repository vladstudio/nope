const toggle = document.getElementById('toggle');
const editLink = document.getElementById('editLink');
const editor = document.getElementById('editor');
const domains = document.getElementById('domains');
const save = document.getElementById('save');
const status = document.getElementById('status');

function updateToggle(enabled) {
  toggle.textContent = enabled ? 'ON' : 'OFF';
  toggle.className = enabled ? 'on' : 'off';
}

chrome.storage.local.get({ enabled: false, domains: [] }, (data) => {
  updateToggle(data.enabled);
  domains.value = data.domains.join('\n');
});

toggle.addEventListener('click', () => {
  chrome.storage.local.get({ enabled: false }, (data) => {
    const next = !data.enabled;
    chrome.storage.local.set({ enabled: next });
    updateToggle(next);
  });
});

editLink.addEventListener('click', () => {
  editor.style.display = editor.style.display === 'none' ? 'block' : 'block';
  editLink.style.display = 'none';
});

save.addEventListener('click', () => {
  const list = domains.value
    .split('\n')
    .map(d => d.trim().toLowerCase())
    .filter(Boolean);
  chrome.storage.local.set({ domains: list });
  status.style.display = 'block';
  setTimeout(() => status.style.display = 'none', 1500);
});
