const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let text = document.getElementById("abc");
    console.log(text.nodeName);

    let data = document.getElementById("data");
    data.innerHTML = text.nodeName;


}
window.addEventListener("load", setup);
