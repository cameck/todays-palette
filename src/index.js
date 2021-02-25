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

const darkText = "#0f0f0f";
const lightText = "#fff";

const lisaArr = Object.keys(lisaPalettes).map(
  (palette) => lisaPalettes[palette]
);
const allPalettes = palettes.concat(lisaArr);

const makeDiv = (color, body) => {
  const newDiv = document.createElement("div");
  const newP = document.createElement("p");
  newP.innerHTML = color;
  if (tinyColor(color).isLight()) {
    newP.style.color = darkText;
  }

  newDiv.appendChild(newP);
  newDiv.style.background = color;
  body.appendChild(newDiv);
};

const yayPalette = () =>
  allPalettes[Math.floor(Math.random() * allPalettes.length)];

const updatePage = (body) => {
  const divs = body.querySelectorAll("div");
  const newPalette = yayPalette();

  divs.forEach((div, i) => {
    div.style.background = newPalette[i];
    const p = div.querySelector("p");
    p.innerHTML = newPalette[i]; // will break if we add new stuff to area
    p.style.color = tinyColor(newPalette[i]).isLight() ? darkText : lightText;
  });
};

const addRefreshButton = (body) => {
  const button = document.createElement("button");
  button.innerHTML = "refresh  💦";
  button.addEventListener("click", (_event) => updatePage(body));
  body.appendChild(button);
};

const init = () => {
  const body = document.getElementsByTagName("body")[0];
  addRefreshButton(body);
  yayPalette().map((color) => makeDiv(color, body));
};

init();
