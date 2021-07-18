const addBtn = document.querySelector(".header__add-btn");
const mainContainer = document.querySelector(".main");
const formContainer = document.querySelector(".form-container");

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
  mainContainer.classList.add("main--unactive");
  formContainer.classList.remove("form-container--unactive");
});
