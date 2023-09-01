let showMenu = false;
const fixedMenu = document.querySelector(".menu-container-fixed");
const whatWeDoSection = document.querySelector("#what-we-do");
const ourVendors = document.querySelector("#our-vendors");
const whoWeAre = document.querySelector("#who-we-are");
const whereWeAre = document.querySelector("#where-we-are");
const whatWeDoSectionItemLink = document.querySelector(
  ".what-we-do-list--item-link"
);
const ourVendorsItemLink = document.querySelector(".our-vendors-list--item-link");
const whoWeAreItemLink = document.querySelector(".who-we-are-list--item-link");
const whereWeAreItemLink = document.querySelector(
  ".where-we-are-list--item-link"
);
let actualSelected = undefined;

const verifiyMenuItemSelection = () => {
  const yPosition1 = whatWeDoSection.getBoundingClientRect().y;
  const yPosition2 = ourVendors.getBoundingClientRect().y;
  const yPosition3 = whoWeAre.getBoundingClientRect().y;
  const yPosition4 = whereWeAre.getBoundingClientRect().y;
  const yMinBound = 250;

  if (actualSelected !== undefined) {
    actualSelected.classList.remove("menu-list--item-link_active");
  }

  if (
    yPosition1 <= yMinBound &&
    (yPosition2 - 900) > yMinBound &&
    yPosition3 > yMinBound &&
    yPosition4 > yMinBound
  ) {
    whatWeDoSectionItemLink.classList.toggle("menu-list--item-link_active");
    actualSelected = whatWeDoSectionItemLink;
    console.log(actualSelected);
  } else if (
    yPosition1 <= yMinBound &&
    (yPosition2 - 900) <= yMinBound &&
    yPosition3 > yMinBound &&
    yPosition4 > yMinBound
  ) {
    ourVendorsItemLink.classList.toggle("menu-list--item-link_active");
    actualSelected = ourVendorsItemLink;
    console.log(actualSelected);

  } else if (
    yPosition1 <= yMinBound &&
    (yPosition2 - 900) <= yMinBound &&
    yPosition3 <= yMinBound &&
    yPosition4 > yMinBound
  ) {
    whoWeAreItemLink.classList.toggle("menu-list--item-link_active");
    actualSelected = whoWeAreItemLink;
    console.log(actualSelected);

  } else if (
    yPosition1 <= yMinBound &&
    (yPosition2 - 900) <= yMinBound &&
    yPosition3 <= yMinBound &&
    yPosition4 <= yMinBound
  ) {
    whereWeAreItemLink.classList.toggle("menu-list--item-link_active");
    actualSelected = whereWeAreItemLink;
    console.log(actualSelected);
  } else {
    if (actualSelected !== undefined) {
      actualSelected.classList.toggle("menu-list--item-link_active");
    console.log(actualSelected);

    }
  }

  //console.log(element.getBoundingClientRect().y);
};

document.addEventListener("scroll", (event) => {
  if (showMenu == false && window.scrollY > 200) {
    showMenu = true;
    fixedMenu.style.top = 0;
  } else if (showMenu == true && window.scrollY <= 200) {
    showMenu = false;
    fixedMenu.style.top = "-200px";
  }

  verifiyMenuItemSelection();
});
