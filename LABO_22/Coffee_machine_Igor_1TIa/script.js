let global = {
    aantalBestellingen: 0,
    arrOrders : [],
    atlEspresso: 0,
    atlCap: 0,
    atlLatte: 0
}


const setup = () => {
    let maakBtn = document.querySelector("#createBtn");
    maakBtn.addEventListener("click", maakKoffie);
}

const maakKoffie = () => {
    let tussenbericht = document.createElement("p");
    tussenbericht.textContent = "Je koffie wordt gemaakt!";

    let test = document.querySelector("#test")
    test.append(tussenbericht);

    tussenbericht.classList.add("tussenbericht");


    global.aantalBestellingen ++;
    voegBestellingToe();

    setTimeout(verwijderBericht, 2000);
    setTimeout(klaarBericht, 2000);
}
const verwijderBericht = () => {
    let tussenbericht = document.querySelector(".tussenbericht");

    document.querySelector("#test").removeChild(tussenbericht);
}

const klaarBericht = () => {
    let test = document.querySelector("#test");

    let span = document.createElement("span");
    span.classList.add("tussenbericht");


    span.textContent = "Je koffie is klaar!";
    test.append(span);


    test.removeChild(span);

}
const voegBestellingToe = () => {
    let bestellingen = document.querySelector("#atlBestellingen");
    bestellingen.textContent = global.aantalBestellingen + " bestellingen";
    voegOrderToe();
}

let order = document.createElement("p");

const voegOrderToe = () => {
    let options = document.querySelectorAll(".coffee");
    let orders = document.querySelectorAll(".orders");
    let test = document.querySelector("#orders");



    order.textContent = global.atlEspresso + " Aantal Espresso's\n" + global.atlCap + " Aantal Cappucinno's\n" + global.atlLatte + " Aantal Lattés";

    let geen = document.querySelector("#geen");
    if(geen !== null){
       orders[0].remove();
    }
    if (orders.length === 0){
        test.append(order);
    }


    //orders.appendChild(order);

    if (options[0].selected){
        global.arrOrders.push("Espresso");
        global.atlEspresso++;
    } else if(options[1].selected){
        global.arrOrders.push("Cappucino");
        global.atlCap++;
    } else{
        global.arrOrders.push("Latte")
        global.atlLatte++;
    }

}



window.addEventListener("load", setup);