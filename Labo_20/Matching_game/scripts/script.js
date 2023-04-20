const global = {
    HORIZONTAAL: 4,
    VERTICAAL: 3,
    KAARTEN: 6,
    IMAGE_PATH_PREFIX: "images/shrek",
    IMAGE_PATH_SUFFIX: ".jpg",
    currentSelected: [],
    gevondenKaarten: 0
}
const setup = () => {
    maakKaarten();
    maakKaarten();
}

const maakKaarten = () => {


    let grid = document.querySelector(".grid");
    let lijst = [];

    for (let i = 0; i < global.KAARTEN; i++){
        let kaart = global.IMAGE_PATH_PREFIX + (i + 1) + global.IMAGE_PATH_SUFFIX;
        let foto = document.createElement("img");
        let achterkant = document.createElement("span");
        let cardDiv = document.createElement("div");
        cardDiv.appendChild(foto);
        cardDiv.appendChild(achterkant);
        achterkant.setAttribute("data-id", i.toString());
        foto.setAttribute("src", kaart);
        achterkant.classList.add("achterkant");
        achterkant.addEventListener("click", controleer)
        cardDiv.appendChild(foto);
        lijst.push(cardDiv);
    }

    lijst.forEach((card) =>{
        grid.appendChild(card);
    } )


}
const controleer = (card) => {
    let geselecteerdeKaarten = global.currentSelected;
        if (geselecteerdeKaarten.length === 0){
            toonAchterkantTerug(card.target);
        } else if(geselecteerdeKaarten.length === 1){
            toonAchterkantTerug(card.target)
            if (geselecteerdeKaarten[0].getAttribute("data-id") !== geselecteerdeKaarten[1].getAttribute("data-id")){
                toonVoorkant(geselecteerdeKaarten[0]);
                toonVoorkant(geselecteerdeKaarten[1]);
            }
            global.currentSelected=[];
        }


}

const toonAchterkantTerug = (cardCover) => {
    cardCover.style.display = "none";
    if (!global.currentSelected.includes(cardCover)) {
        global.currentSelected.push(cardCover);
    }
    global.gevondenKaarten++;
}
const toonVoorkant = (achterkant) => {
    setTimeout(() => {
        achterkant.style.display = "block"
    }, 1000);
    global.gevondenKaarten--;
}


window.addEventListener("load",setup);