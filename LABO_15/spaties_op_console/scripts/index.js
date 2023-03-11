const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let knop = document.getElementById("button");
    knop.addEventListener("click", omvormen);
}



const omvormen = () => {
    let tekst = document.getElementById("tekst").value
    let text2 = tekst.replace(" ", "");
    let arrtext = text2.split("");
        console.log(arrtext);
}

const maakMetSpaties = (inputText) => {
    let result = "";

    let tekst = document.getElementById("tekst").value
    let text2 = tekst.replace(" ", "");
    let arrtext = text2.split("");
    console.log(arrtext);

    return result;
}







window.addEventListener("load", setup);
