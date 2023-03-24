const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.querySelector("#saveBtn");
    button.addEventListener("click", save);

    let sliderRed = document.querySelector("#sliderRed");
    let sliderGreen = document.querySelector("#sliderGreen");
    let sliderBlue = document.querySelector("#sliderBlue");

    sliderRed.addEventListener("input", update);
    sliderGreen.addEventListener("input", update);
    sliderBlue.addEventListener("input", update);

    let klikKleur = document.querySelector("#savedColors");
    klikKleur.addEventListener("click", clickKleur);

}

const update = () => {
    let sliderRed = document.querySelector("#sliderRed");
    let sliderGreen = document.querySelector("#sliderGreen");
    let sliderBlue = document.querySelector("#sliderBlue");



    let lblRed = document.querySelector("#lblRed");
    let lblGreen = document.querySelector("#lblGreen");
    let lblBlue = document.querySelector("#lblBlue");

    lblRed.innerHTML = sliderRed.value;
    lblGreen.innerHTML = sliderGreen.value;
    lblBlue.innerHTML = sliderBlue.value;

    let colorBlock = document.querySelector("#colorBlock");
    colorBlock.style.backgroundColor = `rgb(${sliderRed.value}, ${sliderGreen.value}, ${sliderBlue.value})`;

}

const save = () => {
    let sliderRed = document.querySelector("#sliderRed");
    let sliderGreen = document.querySelector("#sliderGreen");
    let sliderBlue = document.querySelector("#sliderBlue");

    let saveKleur = document.createElement("div");


    saveKleur.style.backgroundColor = `rgb(${sliderRed.value}, ${sliderGreen.value}, ${sliderBlue.value})`;
    saveKleur.classList.add("saveKleur");



    let savedColors = document.querySelector("#savedColors");
    savedColors.insertAdjacentElement("beforeend", saveKleur);



    let rmvBtn = document.createElement("button");
    rmvBtn.textContent = "x";
    saveKleur.insertAdjacentElement("beforeend", rmvBtn);


    saveKleur.addEventListener("click", clickKleur);
    rmvBtn.addEventListener("click", remove);
}

const remove = (event) => {
    event.target.parentElement.remove();
}

const clickKleur = (event) => {
    let block = document.querySelector(".kleurblok");

    block.style.backgroundColor = event.target.style.backgroundColor;
}







window.addEventListener("load", setup);
