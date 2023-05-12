const prefixs =["g","y","t","i"];

const objecten =[];

const c = {
    title: "",
    text: "",
    url: ""
};

let arrCmds = [];

const setup = () =>{
    let btn = document.querySelector("#go")
    btn.addEventListener("click", vulObjectOp);
    btn.addEventListener("click", gaNaarLink);

    zetObjectenTerug();
}

const haalDataOp = () =>{
    let input = document.querySelector("#zoek");
    console.log(input.value);
    return input.value;
}

const valideerPrefix = () =>{
    const prefix = haalDataOp().substring(1,2);

    prefixs.forEach(element => {
        if(prefix === element){
            return true;
        } else{
            return false;
        }
    });
}
const vulObjectOp = () =>{
    let data = haalDataOp();

    let prefix = data.substring(1,2);
    let tekst = data.substring(2);

    console.log(prefix)

        if(prefix === prefixs[0]){
            c.title = "google";
            c.text = tekst;
            c.url = "https://www.google.com/search?q=" + tekst.trim();
        } else if(prefix === prefixs[1]){
            c.title = "youtube";
            c.text = tekst;
            c.url = "https://www.youtube.com/results?search_query=" + tekst.trim();
        } else if(prefix === prefixs[2]){
            c.title = "twitter"
            c.text = tekst;
            c.url = "https://www.twitter.com/hashtag/" + tekst.trim();
        } else if(prefix === prefixs[3]){
            c.title = "instagram";
            c.text = tekst;
            c.url = "https://www.instagram.com/explore/tags/" + tekst.trim();
        }


    let blok = document.createElement("div");
    let rij = document.querySelector(".rij");

    blok.classList.add("card");
    blok.classList.add(prefix);

    let body = document.createElement("div");
    let titel = document.createElement("h5");
    let p = document.createElement("p");
    let a = document.createElement("a");


    titel.textContent = c.title;
    p.textContent = c.text;
    a.textContent = "Go!";

    a.setAttribute("href", c.url);

    


    body.classList.add("card-body");
    titel.classList.add("card-title");
    p.classList.add("card-text");
    a.classList.add("btn");

    rij.appendChild(blok);

    body.append(titel);
    body.append(p);
    body.append(a);
    blok.append(body);
    console.log(c);

    gaNaarLink();
    slaObjectenOp(c.title, c.text, c.url);
}
const slaObjectenOp = (title, tekst, url) =>{
    let object = {};
    object.title = title;
    object.tekst = tekst;
    object.url = url;

    objecten.push(object);

    let json = JSON.stringify(objecten);
    localStorage.setItem("history", json);

}

const zetObjectenTerug = () =>{
    let blokken = localStorage.getItem("history");

    let arr = JSON.parse(blokken);

    let prefix = c.title.substring(0,1);

    console.log(arr[0].title);
}

const gaNaarLink = () =>{
    window.open(c.url);
}

window.addEventListener("load", setup);