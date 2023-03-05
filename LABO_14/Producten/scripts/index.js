const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let herbereken = document.getElementById("bereken");
    let waarde1 = document.getElementById("value3");
    let waarde2 = document.getElementById("value2");
    let waarde3 = document.getElementById("value1");



    const bereken = () => {
        let btw1 = document.getElementById("btw1")
        let btw2 = document.getElementById("btw2")
        let btw3 = document.getElementById("btw3")

        let prijs1 = document.getElementById("prijs1")
        let prijs2 = document.getElementById("prijs2")
        let prijs3 = document.getElementById("prijs3")

        let totaal1 = document.getElementById("totaal1")
        let totaal2 = document.getElementById("totaal2")
        let totaal3 = document.getElementById("totaal3")

        prijs = parseInt(prijs1);
        btw = parseInt(btw1);
        waarde = parseInt(waarde3)
        tussentijd = ((waarde * prijs)/100)* btw;
        totaal = tussentijd + waarde;
        totaal1.innerHTML = totaal;

    }
    herbereken.addEventListener("click", bereken)

}





window.addEventListener("load", setup);
