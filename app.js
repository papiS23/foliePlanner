const addBtn = document.querySelector(".header__add-btn");
const mainContainer = document.querySelector(".main");

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
