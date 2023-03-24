const setup = () => {
  let list = document.querySelectorAll("li");


  let style = document.createElement("style");
  style.textContent = ".list{color:red;}";
  let headElement = document.querySelector("head");
  headElement.appendChild(style);


  for (let i = 0; i < list.length; i++) {
      list[i].classList.add("list")
  }

  let img = document.createElement("img");
  let body = document.querySelector("body");

  img.setAttribute("src", "img/Gewone_pad_Lead_JH_1200x600px.jpg")
  body.appendChild(img);

}

window.addEventListener("load", setup);