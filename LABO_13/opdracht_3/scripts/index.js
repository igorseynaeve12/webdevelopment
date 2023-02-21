const setup = () => {

// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}


let btnWijzigen=document.getElementById("btnWijzigen");
let pElement=document.getElementById("txtOutput");


const veranderTekst = () =>{
    if (btnWijzigen.click){
        pElement.innerHTML="Welkom!";
    }

}

window.addEventListener("click", veranderTekst);
window.addEventListener("load", setup);
