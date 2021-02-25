import palettes from 'nice-color-palettes';
import './style.css';

const makeDiv = (color, body) => {
  const newdiv = document.createElement('div');
  newdiv.style.background = color;
  body.appendChild(newdiv);
};

const init = () => {
  const body = document.getElementsByTagName('body')[0];
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  palette.forEach((color) => makeDiv(color, body));
};

init();
