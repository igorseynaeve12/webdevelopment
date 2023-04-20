const setup = () => {
    berekenAantalDagen();
}


const berekenAantalDagen = () => {
    let vandaag = new Date();
    let verjaardag = new Date(2023, 4, 20);
    let aantaldagen = 0;

    aantaldagen = verjaardag - vandaag;


    console.log(Math.floor((((aantaldagen/1000)/60)/60)/24));

}

window.addEventListener("load", setup);