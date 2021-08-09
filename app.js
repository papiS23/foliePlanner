const addBtn = document.querySelector(".header__add-btn");
const mainContainer = document.querySelector(".main");
const mainList = document.querySelector(".main__list");
const formContainer = document.querySelector(".form-container");
const headerIcon = document.querySelector(".header__add-icon");
const formAddBtn = document.querySelector(".form-container__submit");
const dimensionsBox = document.querySelector(".form-container__dimen-items");
const dimensionsAddBtn = document.querySelector(
  ".form-container__dimen-addBtn"
);

class Job {
  constructor(
    adress,
    name,
    number,
    date,
    foil,
    foilLength,
    foilPrice,
    clientPrice
  ) {
    this.adress = adress;
    this.name = name;
    this.number = number;
    this.date = date;
    this.foil = foil;
    this.foilLength = foilLength;
    this.foilPrice = foilPrice;
    this.clientPrice = clientPrice;
  }
  createListItem() {
    const Item = document.createElement("div"); //glowny kontener calego zlecenia

    console.log(
      `${this.name}---${this.date}---${this.adress}---${this.number}---${this.foilLength}---${this.foil}`
    );
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

formAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formDatas = document.querySelectorAll(".form-container__input");

  const listItem = new Job(
    formDatas[0].value,
    formDatas[1].value,
    formDatas[2].value,
    formDatas[3].value,
    formDatas[4].value,
    formDatas[5].value,
    formDatas[6].value,
    formDatas[7].value
  );
  listItem.createListItem();
});

dimensionsAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //pobrac wartosci i stworzy elementy zawierajace wymiary.
});
