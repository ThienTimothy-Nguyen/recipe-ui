let content = "ingredients";

const setVal = (val) => {
  if (val === "" || val <= 0) {
    document.getElementById("serving").value = 1;
    updateIngredientList(1);
  } else {
    document.getElementById("serving").value = val;
    updateIngredientList(val);
  };
};

const addVal = (num) => {
  const input_elem = document.getElementById("serving");
  let newVal = Number(input_elem.value) + num;
  setVal(newVal);
};

const updateIngredientList = (serving) => {
  const ingredients = {
    chicken: [1.4, "kg"],
    rice_wine: [2, "tbsp"],
    minced_ginger: [2, "tsp"],
    salt: [1, "tsp"],
    black_pepper: [0.5, "tsp"],
    potato_starch: [1, "cup"],
    oil: [0.5, "L"],
  };

  const ingredientsQuantities = Object.values(ingredients);

  for (let i = 0; i < ingredientsQuantities.length; i++) {
    document.getElementsByClassName("recipe-content__quantity")[i].textContent = `
      ${(ingredientsQuantities[i][0] * serving).toFixed(1)} ${ingredientsQuantities[i][1]}
    `;
  };
};

const updateDisplayContent = (content) => {
  if (window.innerWidth < 630) {
    let displayContent;
    let hiddenContent;

    if (content === "ingredients") {
      displayContent = document.querySelector(".recipe-content__column--ingredients");
      hiddenContent = document.querySelector(".recipe-content__column--methods");
    } else {
      displayContent = document.querySelector(".recipe-content__column--methods");
      hiddenContent = document.querySelector(".recipe-content__column--ingredients");
    }

    displayContent.classList.remove("hidden")
    hiddenContent.classList.add("hidden")

    return
  };

  document.querySelector(".recipe-content__column--ingredients").classList.remove("hidden")
  document.querySelector(".recipe-content__column--methods").classList.remove("hidden")
}

const displayContent = (displayContent) => {
  let focusedButton;
  let unfocusedButton;
  content = displayContent

  if (displayContent === "ingredients") {
    focusedButton = document.querySelector(".recipe-nav__button--ingredients");
    unfocusedButton = document.querySelector(".recipe-nav__button--method");
  } else {
    focusedButton = document.querySelector(".recipe-nav__button--method");
    unfocusedButton = document.querySelector(".recipe-nav__button--ingredients");
  };

  focusedButton.classList.add("recipe-nav__button--selected");
  focusedButton.disabled = true;

  unfocusedButton.classList.remove("recipe-nav__button--selected");
  unfocusedButton.disabled = false;

  updateDisplayContent(displayContent);
};

document.addEventListener("DOMContentLoaded", () => {
  updateIngredientList(1);
  displayContent(content);
});

window.addEventListener("resize", () => {
  displayContent(content)
});


