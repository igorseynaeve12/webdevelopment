const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
window.addEventListener("load", setup);

let familienamen = ["Diederick", "Seynaeve", "Kopenhagen", "KDQJGIGQ", "Koeiemans"];
let aantalNamen = 0;
for (let i = 0; i < familienamen.length; i++) {
    aantalNamen ++;
}
console.log(aantalNamen);

console.log(familienamen[0], familienamen[2], familienamen[4]);


let familienaam = prompt("Please enter your lastname", "Potter");
const voegNaamToe = (familienaam) =>{
    familienamen.push(familienaam);
}
voegNaamToe(familienaam);
console.log(familienamen.toString());

console.log(window.alert("Dit is de mededeling"));
window.confirm("Weet u het zeker?");
window.prompt("Wat is uw naam", "onbekend");

let confirm = window.prompt("Weet u het zeker dat u wilt doorgaan? ", "Test");

console.log(confirm);