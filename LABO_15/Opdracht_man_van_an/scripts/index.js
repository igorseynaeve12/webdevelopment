const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("button");
    button.addEventListener("click", telAantal);
}

const telAantal = () => {
    let text = document.querySelector("#txtInput").value;
    let arrText = text.split("an").length - 1
    console.log(arrText);
}


window.addEventListener("load", setup);
