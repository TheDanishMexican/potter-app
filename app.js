"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const potterName = "Harry Potter";
  const potterGender = "male";
  const potterHouse = "Gryffindor";
  const potterDateOfBirth = "31-07-1980";
  const potterAncestry = "half-blood";
  const potterEyeColour = "green";
  const potterHairColour = "black";
  const potterActor = "Daniel Radcliffe";
  const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

  showCharacter(
    potterName,
    potterGender,
    potterHouse,
    potterDateOfBirth,
    potterAncestry,
    potterEyeColour,
    potterHairColour,
    potterActor,
    potterImage
  );
}

function showCharacter(
  potterName,
  potterGender,
  potterHouse,
  potterDateOfBirth,
  potterAncestry,
  potterEyeColour,
  potterHairColour,
  potterActor,
  potterImage
) {
  const placement = document.querySelector("#characters");

  const myHTML = /*html*/ `
  <article>
  <img src="${potterImage}">
  <h2>Name: ${potterName}</h2>
    <p>House: ${potterHouse}</p>
    <p>Date of birth: ${potterDateOfBirth}</p>
    <p>Actor name: ${potterActor}</p>
    </article>`;

  placement.insertAdjacentHTML("beforeend", myHTML);
}
