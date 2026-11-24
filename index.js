const setVal = (val) => {
  if (val === "" || val <= 0) {
    document.getElementById("serving").value = 1;
    updateIngredientList(1)
  } else {
    document.getElementById("serving").value = val;
    updateIngredientList(val)
  }
}

const addVal = (num) => {
  input_elem = document.getElementById("serving");
  let newVal = Number(input_elem.value) + num;
  setVal(newVal);
}

const updateIngredientList = (serving) => {
  const ingredients = {
    chicken: 1.4,
    rice_wine: 2,
    minced_ginger: 2,
    salt: 1,
    black_pepper: 0.5,
    potato_starch: 1,
    oil: 0.5,
  }

  ingredientsQuantities = Object.values(ingredients)
  for (let i = 0; i < ingredientsQuantities.length; i++) {
    document.getElementsByClassName("number")[i].textContent = (
      ingredientsQuantities[i] * serving
    ).toFixed(1)
  }
}

