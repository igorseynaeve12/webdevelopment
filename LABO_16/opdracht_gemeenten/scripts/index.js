const setup = () => {
    const selectie = document.querySelector("#select");
    let gemeenten = [];
    let gemeente = "";



    while (gemeente !== "stop") {
        gemeente = window.prompt("Gemeente:").toLowerCase()
        if (gemeente !== "stop") {
            gemeenten.push(gemeente);
        }
    }
    gemeenten.sort().forEach((element) => {
        let keuze = document.createElement("option");

        keuze.textContent = element;

        gemeenten.insertAdjacentElement("beforeend", keuze);
    })
}
window.addEventListener("load", setup)