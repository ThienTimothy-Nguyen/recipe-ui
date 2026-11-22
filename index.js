const setValue = (val) => {
  document.getElementById("serving").value = val
}

const validateVal = (val) => {
  if (val === "" || val < 0) {
    setValue(0)
    return 0
  }
  return val
}

const incVal = () => {
  input_elem = document.getElementById("serving");
  let newVal = Number(input_elem.value) + 1;
  setValue(newVal)
}

const decVal = () => {
  input_elem = document.getElementById("serving");
  let newVal = Number(input_elem.value) - 1;
  setValue(validateVal(newVal))
}

