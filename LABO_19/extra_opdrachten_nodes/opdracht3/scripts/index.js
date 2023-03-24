const setup = () => {
  let btn = document.querySelector("button");
  btn.addEventListener("click", veranderTxt);

}

const veranderTxt = (zin) => {
  let pElement = document.createElement("p");
  let divElement = document.querySelector("div");

  pElement.textContent = "Dit is een p element";
  divElement.appendChild(pElement);
}

window.addEventListener("load", setup);