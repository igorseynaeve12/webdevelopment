const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let colors = [red, green, blue];
    localStorage.setItem("sliderValues", JSON.stringify(colors));
};

const restoreSliderValues = () => {
    let sliders = document.querySelectorAll(".slider");
    let sliders2 = localStorage.getItem("sliderValues")
    let sliders3 = JSON.parse(sliders2);
    sliders[0].value = sliders3[0];
    sliders[1].value = sliders3[1];
    sliders[2].value = sliders3[2];
    console.log(sliders3)

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let components = document.querySelector("#swatchComponents");
    let swatches = components.querySelectorAll(".swatch");
    console.log(swatches);
        let arr = [];





    for (let i = 0; i < swatches.length; i++) {

        let kleur = {}

        kleur.red = swatches[i].getAttribute("data-red");
        kleur.green = swatches[i].getAttribute("data-green");
        kleur.blue = swatches[i].getAttribute("data-blue");

        arr.push(kleur);
    }
        console.log(arr);
    /*swatches.forEach(swatch =>{
        kleur.red =
    })*/



    localStorage.setItem("swatches", JSON.stringify(arr));


};

const restoreSwatches = () => {
    let colorblock = localStorage.getItem("swatches");
    let test = JSON.parse(colorblock);

    console.log(test);
    for (let i = 0; i < test.length; i++) {
        addSwatchComponent(test[i].red, test[i].green, test[i].blue);
    }
};
