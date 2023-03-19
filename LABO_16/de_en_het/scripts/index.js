const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}


const vervang = (zin) => {
    let vervangdeZin = "";

    let split = zin.split(" ");
    for (let i = 0; i < split.length ; i++){
        if (split[i] === "de"){
            split[i] = "het";
        }
    }
    vervangdeZin = split;



    return vervangdeZin.join(" ");
}

console.log(vervang("Gisteren zat de jongen op de stoep en at de helft van de appel"));

window.addEventListener("load", setup);