let personen=[]

// Event listener (btnBewaar click)

// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");

    let persoon = {
        voornaam: txtVoornaam.value,
        familienaam: txtFamilienaam.value,
        geboorteDatum: txtGeboorteDatum.value,
        email: txtEmail.value,
        kinderen: txtAantalKinderen.value
    }

    let lijst = document.querySelector("#lstPersonen");

    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();


        if (zoekGebruiker(txtEmail.value)){
            let test = document.getElementById("1");
            test.textContent = txtVoornaam.value + " " + txtFamilienaam.value;
            console.log(test);
        } else{
            let option = document.createElement("option")
            option.textContent = persoon.voornaam + " " + persoon.familienaam;
            lijst.append(option);
            personen.push(persoon);
            for (let i = 0; i < personen.length; i++) {
                option.setAttribute("id", i+1);
            }
        }


    
    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const nieuw = () => {
    txtVoornaam.value = "";
    txtFamilienaam.value = "";
    txtGeboorteDatum.value = "";
    txtEmail.value = "";
    txtAantalKinderen.value ="";
}

const veranderPersoon = (event) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");

    const persoon = personen[event.target.index]

    txtVoornaam.value = persoon.voornaam;
    txtFamilienaam.value = persoon.familienaam;
    txtGeboorteDatum.value = persoon.geboorteDatum;
    txtEmail.value = persoon.email;
    txtAantalKinderen.value = persoon.kinderen;


}

const getOptionId = (event) => {
    return event.target.getAttribute("id");
}


const zoekGebruiker = (email) => {
    console.log(personen.find(persoon => persoon.email === email));
    return personen.find(persoon => persoon.email === email)
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", nieuw);

    let lstPersonen = document.getElementById("lstPersonen");

    lstPersonen.addEventListener("click", veranderPersoon);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);