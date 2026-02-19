const COUNT = 17;
const idx = Math.floor(Math.random() * COUNT) + 1;
document.getElementById('gif').src = `gifs/${idx}.webp`;
document.getElementById('back').addEventListener('click', (e) => {
  e.preventDefault();
  history.back();
});
