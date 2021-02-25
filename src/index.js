import palettes from 'nice-color-palettes/500';
import tinyColor from 'tinycolor2';

import './style.css';

const makeDiv = (color, body) => {
  const newDiv = document.createElement('div');
  const newP = document.createElement('p');
  newP.innerHTML = color;
  const isLight = tinyColor(color).isLight();
  if (isLight) {
    newP.style.color = '#0f0f0f';
  }

  newDiv.appendChild(newP);
  newDiv.style.background = color;
  body.appendChild(newDiv);
};

const init = () => {
  const body = document.getElementsByTagName('body')[0];
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  palette.map((color) => makeDiv(color, body));
};

init();
