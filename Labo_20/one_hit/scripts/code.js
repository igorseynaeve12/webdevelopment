let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    let startButton = document.querySelector("button");
    startButton.addEventListener("click", startSpel);
}

const fout = () => {
    let bom = document.querySelector("#target");
    if (bom.getAttribute("src") === global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX) {
        window.alert("Je hebt op de bom geklikt!!!");
    }
}

const moveImg = () => {
    // Deze function wordt opgeroepen telkens de gebruiker
    // op het speelveld klikt.
    let donut = document.getElementsByClassName("bom")[0];
    let speelveld=document.getElementById("playField");
    let maxLeft=speelveld.clientWidth - donut.offsetWidth;
    let maxHeight=speelveld.clientHeight - donut.offsetHeight;

    // verplaats de sprite
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);

    donut.style.left=left+"px";
    donut.style.top=top+"px";
}

const veranderImg = () => {
    let img = document.querySelector("#target");
    let test = Math.round(Math.random()*(global.IMAGE_COUNT-1));

    let afb = global.IMAGE_PATH_PREFIX + test + global.IMAGE_PATH_SUFFIX;

    img.setAttribute("src", afb);
}

const startSpel = () => {
    let button = document.querySelector("#start");
    if (button.click){
        let bom = document.querySelector("#target");
        bom.addEventListener("click", fout);
        bom.addEventListener("click", moveImg);
        bom.addEventListener("click", telScore);
        bom.addEventListener("click", spelAfgelopenMetBom);
        setInterval(veranderImg, 1000)
    }
}

const spelAfgelopenMetBom = () => {
    let img = document.querySelector("#target");
    if (img.getAttribute("src") === global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX){
        global.score = 0;
        img.style.left=0 + "px";
        img.style.top=0 + "px";
    }
}

const telScore = () => {
    let scoreSpeler = document.querySelector("#score");
    let img = document.querySelector("#target")

    if (img.click){
        let score1 = global.score ++;
        scoreSpeler.textContent = "Aantal hits " + score1;
    }
}


window.addEventListener("load", setup);


