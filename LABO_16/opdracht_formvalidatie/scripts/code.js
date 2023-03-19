const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerAchternaam();
	valideerDatum();
	valideerEmail();
	valideerKind();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};

const valideerAchternaam = () => {
	let txtAchternaam = document.getElementById("txtAchternaam");
	let errAchternaam = document.getElementById("errAchternaam");
	let achternaam = txtAchternaam.value.trim();

	if (achternaam === ""){
		txtAchternaam.className="invalid";
		errAchternaam.innerHTML= "Dit veld is verplicht!";
	} else if (achternaam.length > 50){
		txtAchternaam.className="invalid"
		errAchternaam.innerHTML= "max 50. karakters"
	} else{
		txtAchternaam.className="";
		errAchternaam.innerHTML="";
	}
}

const valideerDatum = () => {
	let txtDatum = document.getElementById("datum");
	let errDatum = document.getElementById("errDatum");
	let datum = txtDatum.value;

	if (datum === ""){
		txtDatum.className= "invalid";
		errDatum.innerHTML="Dit veld is verplicht!"
	} else if(!isGeldigeDatum(datum)){
		txtDatum.className ="invalid";
		errDatum.innerHTML="Dit is geen geldige datum";
	} else{
		txtDatum.className ="";
		errDatum.innerHTML="";
	}
}

const valideerEmail = () => {
	let txtEmail = document.getElementById("email");
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value;

	if (email === ""){
		txtEmail.className= "invalid";
		errEmail.innerHTML="Dit veld is verplicht!"
	} else if(!email.contains("@")){
		txtEmail.className="invalid";
		errEmail.innerHTML="Geen geldig email adres";
	} else{
		txtEmail.className="";
		errEmail.innerHTML="";
	}
}

const valideerKind = () => {
	let txtKind = document.getElementById("kind");
	let errKind = document.getElementById("errKind");
	let kind = txtKind.value;

	if (kind === ""){
		txtKind.className= "invalid";
		errKind.innerHTML="dit veld is verplicht"
	} else if (kind > 99){
		txtKind.className="invalid";
		errKind.innerHTML="is te vruchtbaar!";
	} else{
		txtKind.className="";
		errKind.innerHTML="";
	}
}


const isGeldigeDatum = (datum) => {
	let txtDatum = document.getElementById("datum");
	let waar = false;
	if (isGetal(datum.substring(0,4))){
		if (isGetal(datum.substring(6,7))){
			if (isGetal(datum.substring(9,10))){
				waar = true;
			}
		}
	}
	return waar;
}

const isGetal = (tekst) => {
	return !isNaN(tekst);
}


window.addEventListener("load", setup);