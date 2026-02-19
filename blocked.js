const GIFS = [
  "https://media2.giphy.com/media/NpL4D3Oc2bJUMAXF9P/200.gif",
  "https://media2.giphy.com/media/eKrgVyZ7zLvJrgZNZn/giphy.gif",
  "https://media4.giphy.com/media/xdLH51eNWZAHrwy5mf/200.gif",
  "https://media3.giphy.com/media/daPCSjwus6UR2JxRX1/200.gif",
  "https://media4.giphy.com/media/I8z7CGrLDLpbq/giphy.gif",
  "https://media3.giphy.com/media/cIE7Ilw4o0Tz7706ir/giphy.gif",
  "https://media2.giphy.com/media/d1E1msx7Yw5Ne1Fe/giphy.gif",
  "https://media3.giphy.com/media/ui4VjMUBGXhwgdwUnK/200.gif",
  "https://media4.giphy.com/media/9uIaiMrvUUP3iadhNj/200.gif",
  "https://media2.giphy.com/media/80dEaDJ6YMxdLefxJs/giphy.gif",
  "https://media4.giphy.com/media/wofftnAdDtx4s/200.gif",
  "https://media0.giphy.com/media/wYyTHMm50f4Dm/200.gif",
  "https://media1.giphy.com/media/nKZEvTua5D4o0XD6Ge/200.gif",
  "https://media4.giphy.com/media/26hkhKd2Cp5WMWU1O/giphy.gif",
  "https://media0.giphy.com/media/zWZ3LFcnpQPt3MQhRS/200.gif",
  "https://media1.giphy.com/media/1zSz5MVw4zKg0/giphy.gif",
  "https://media2.giphy.com/media/eXUEJIGa2BXWjh8q6l/giphy.gif",
  "https://media4.giphy.com/media/vyTnNTrs3wqQ0UIvwE/200.gif",
  "https://media4.giphy.com/media/QBurxgHmS9EPCYf8ej/giphy.gif",
  "https://media4.giphy.com/media/JtLrtaN4VPoKXJRKGB/giphy.gif",
  "https://media0.giphy.com/media/gnE4FFhtFoLKM/giphy.gif",
  "https://media1.giphy.com/media/1SAmkSqxjO8PLW0Tk7/200.gif",
  "https://media4.giphy.com/media/fXnRObM8Q0RkOmR5nf/giphy.gif"
];

document.getElementById('gif').src = GIFS[Math.floor(Math.random() * GIFS.length)];
document.getElementById('back').addEventListener('click', (e) => {
  e.preventDefault();
  history.back();
});
