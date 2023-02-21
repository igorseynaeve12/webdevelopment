const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnSubstring = document.getElementById("substring");
    btnSubstring.addEventListener("click", substring);
}


const substring = () =>{
    let txtInput = document.getElementById("woord");
    let tekst = txtInput.value;
    let g1 = document.getElementById("g1").value;
    let g2 = document.getElementById("g2").value;



    let txtOutput = document.getElementById("txtOutput");
    let geknipt = tekst.substring(g1, g2);
    txtOutput.innerHTML = geknipt;

}



window.addEventListener("load", setup);
