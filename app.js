const addBtn = document.querySelector(".header__add-btn");
const mainContainer = document.querySelector(".main");
const formContainer = document.querySelector(".form-container");
const headerIcon = document.querySelector(".header__add-icon");

class Job {
  constructor(adress, name, number, foil, foilLength, date) {
    this.adress = adress;
    this.name = name;
    this.number = number;
    this.foil = foil;
    this.foilLength = foilLength;
    this.date = date;
  }
}

addBtn.addEventListener("click", (e) => {
  mainContainer.classList.toggle("main--unactive");
  formContainer.classList.toggle("form-container--unactive");

  if (mainContainer.classList.contains("main--unactive")) {
    headerIcon.src = "./imgs/back_icon.svg";
  } else {
    headerIcon.src = "./imgs/add_icon.svg";
  }
});
