const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let sliders = document.getElementsByClassName("slider");
    let slider2 = document.getElementsByClassName("slider2");
    let slider3 = document.getElementsByClassName("slider3");
    let colorblock = document.getElementsByClassName("colorBlock");


    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);

    slider2[0].addEventListener("change", update);
    slider2[0].addEventListener("input", update);

    slider3[0].addEventListener("change", update);
    slider3[0].addEventListener("input", update);

    colorblock[0].style.backgroundColor= 'red'

    red.innerHTML = 'Red ' + sliders[0].value
    green.innerHTML = 'Green ' + slider2[0].value
    blue.innerHTML = 'Blue ' + slider3[0].value
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let slider2 = document.getElementsByClassName("slider2");
    let slider3 = document.getElementsByClassName("slider3");

    let red = document.getElementById("red");
    let green = document.getElementById("green")
    let blue = document.getElementById("blue")

    let value=sliders[0].value;
    let value2 = slider2[0].value;
    let value3 = slider3[0].value;


    red.innerHTML = 'Red ' +  value;
    green.innerHTML = 'Green ' + value2;
    blue.innerHTML = 'Blue ' + value3;

}





window.addEventListener("load", setup);
