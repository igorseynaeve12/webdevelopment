const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let gemeenten = [];
    let gemeente = "";
    while(gemeente !== "stop"){
        gemeente = window.prompt("Gemeente: ");
        gemeenten.push(gemeente);
        gemeenten.sort();




        let optie = document.createElement("option");
        optie.textContent = gemeente;
    }
    console.log(gemeenten);
    document.getElementById("select");

}

const stop = () => {
}



window.addEventListener("load", setup);