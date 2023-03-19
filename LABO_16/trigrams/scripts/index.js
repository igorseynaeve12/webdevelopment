const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}


const printTigrams = (woord) => {
    let tigrams = "";
    let nmr = 3;
    for (let i = 0; i < woord.length; i++){
        if (woord.slice(i, nmr).length === 3){
            tigrams += woord.slice(i, nmr)
            tigrams += " ";
            nmr ++;
        }
    }
    return tigrams;
}
console.log(printTigrams("onoorbaar"));

window.addEventListener("load", setup);
