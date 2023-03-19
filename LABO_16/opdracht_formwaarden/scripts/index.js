const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("result");
    button.addEventListener("click", toonResultaat);
}

const toonResultaat = () => {
    let text = "";
    let roker = document.getElementById("roker");
    let taal = document.getElementsByName("taal");
    let land = document.getElementsByName("favoland");
    let bestelling = document.getElementsByName("best");


    if(roker.checked){
        text += "is een roker \n";
    } else{
        text += "is geen roker \n"
    }
    if(taal[0].checked){
        text+= "Moedertaal is nl \n";
    } else if(taal[1].checked){
        text+= "Moedertaal is fr \n";
    } else {
        text += "Moedertaal is en \n"
    }
    text += "Favoriete buurland is "
    if(land[0].selected){
        text += "Nederland \n";
    }
    if (land[1].selected){
        text  += "Frankrijk \n";
    }
    if (land[2].selected){
        text += "Duitsland \n";
    }
    text += "bestelling bestaat uit "

    for (let i = 0; i < bestelling.length; i++) {
        if (bestelling[i].selected){
            text += bestelling[i].value + " ";
        }
    }


    console.log(taal);
    console.log(text);
    console.log(land);
}




window.addEventListener("load", setup);