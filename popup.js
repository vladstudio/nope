const toggle = document.getElementById('toggle');
const editLink = document.getElementById('editLink');
const editor = document.getElementById('editor');
const domains = document.getElementById('domains');
const save = document.getElementById('save');
const status = document.getElementById('status');

const iconOff = document.getElementById('iconOff');
const iconOn = document.getElementById('iconOn');

function updateToggle(enabled) {
  toggle.className = enabled ? 'track on' : 'track';
  iconOff.classList.toggle('dim', enabled);
  iconOn.classList.toggle('dim', !enabled);
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
  editor.style.display = 'none';
  editLink.style.display = 'block';
});
