const setup = () => {
    maakJsonString();
    maakStudent();
}

let student1 ={
    voornaam : "jan",
    familienaam: "Jansens",
    geboorteDatum: new Date("1993-02-10"),
    adres : { // een object
        straat : "Kerkstraat 13",
        postcode : "8500",
        gemeente : "Kortrijk"
    },
    isIngeschreven : true,
    namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
    aantalAutos : 2
}

const maakJsonString = () => {
    let json = JSON.stringify(student1)

    console.log(json);
}

const maakStudent = () => {
    let student1 = JSON.parse("{\"voornaam\":\"jan\",\"familienaam\":\"Jansens\",\"geboorteDatum\":\"1993-02-10T00:00:00.000Z\",\"adres\":{\"straat\":\"Kerkstraat 13\",\"postcode\":\"8500\",\"gemeente\":\"Kortrijk\"},\"isIngeschreven\":true,\"namenVanExen\":[\"Sofie\",\"Berta\",\"Philip\",\"Albertoooo\"],\"aantalAutos\":2}\n")
    console.log(student1.voornaam);
}



window.addEventListener("load", setup)