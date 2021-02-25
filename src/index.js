import palettes from "nice-color-palettes";
import tinyColor from "tinycolor2";

import lisaPalettes from "./data/colorLisa.json";

import "./assets/android-chrome-192x192.png";
import "./assets/android-chrome-512x512.png";
import "./assets/apple-touch-icon.png";
import "./assets/favicon-16x16.png";
import "./assets/favicon-32x32.png";
import "./assets/favicon.ico";
import "./assets/site.webmanifest";
import "./style.css";

const lisaArr = Object.keys(lisaPalettes).map(
  (palette) => lisaPalettes[palette]
);
const allPalettes = palettes.concat(lisaArr);

const makeDiv = (color, body) => {
  const newDiv = document.createElement("div");
  const newP = document.createElement("p");
  newP.innerHTML = color;
  const isLight = tinyColor(color).isLight();
  if (isLight) {
    newP.style.color = "#0f0f0f";
  }

  newDiv.appendChild(newP);
  newDiv.style.background = color;
  body.appendChild(newDiv);
};

const init = () => {
  const body = document.getElementsByTagName("body")[0];
  const palette = allPalettes[Math.floor(Math.random() * allPalettes.length)];
  palette.map((color) => makeDiv(color, body));
};

init();
