const setup = () => {
  let allePs = document.querySelectorAll("p");

  allePs[0].textContent = "Good Job!"
}

window.addEventListener("load", setup);