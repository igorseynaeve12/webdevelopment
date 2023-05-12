let arr = [1,2,3,4,5,6,7,8,9,10];
const setup = () =>{
    let btn = document.querySelector("#go");
    console.log(btn)
    btn.addEventListener("click", maakTabel);
}

const maakTabel = () =>{
    let input = document.querySelector("#txtInput").value;
    let tables = document.querySelector(".tables")
    let tijdstip = new Date();
    let angepasteTijdstip = tijdstip.getHours() +":"+ tijdstip.getMinutes() +":"+ tijdstip.getSeconds()
    
    let tabel = document.createElement("div");
    let tablehead = document.createElement("div");
    let h3 = document.createElement("h3");

    tabel.classList.add("tabel");
    tablehead.classList.add("head")

    tabel.append(tablehead);
    tablehead.append(h3);
    tables.append(tabel);


    h3.textContent = "Tafel van " + input + " aangemaakt op: " + angepasteTijdstip;

    console.log(h3)


    for (let i = 0; i < arr.length; i++) {
        let p = document.createElement("p");
        p.textContent = input + "x" + arr[i] + "=" + arr[i]*input;
        tabel.append(p);
        p.classList.add("td")
    }
}


window.addEventListener("load", setup);