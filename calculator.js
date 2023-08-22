const numbers = document.querySelectorAll(".number");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
const add = document.querySelector(".add");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");
const sub = document.querySelector(".sub");
const mod = document.querySelector(".mod");
const equal = document.querySelector(".equal");
const negate = document.querySelector(".negate");
let valueOne = 0;
let resultValue = 0;
let sign = "";
let isdot = false;

const numberAssign = (e) => {
  // if (e.target.innerHTML != ".")
  result.innerHTML += e.target.innerHTML;
  // else if (!isdot) {
  //   isdot = true;
  //   result.innerHTML += e.target.innerHTML;
  // }
};

numbers.forEach((button) => {
  button.addEventListener("click", numberAssign);
});

clear.addEventListener("click", () => {
  result.innerHTML = "";
  valueOne = 0;
  resultValue = 0;
  sign = "";
  isdot = false;
});

add.addEventListener("click", () => {
  if (result.innerHTML != "" && sign == "") {
    valueOne = parseFloat(result.innerHTML);
    sign = add.innerHTML;
    result.innerHTML = "";
  } else if (result.innerHTML != "" && sign != "") {
    resultValue = eval(valueOne + sign + result.innerHTML);
    valueOne = resultValue;
    result.innerHTML = "";
    sign = add.innerHTML;
  }
});

mul.addEventListener("click", () => {
  if (result.innerHTML != "" && sign == "") {
    valueOne = parseFloat(result.innerHTML);
    sign = "*";
    console.log(valueOne);
    result.innerHTML = "";
  } else if (result.innerHTML != "" && sign != "") {
    resultValue = eval(valueOne + sign + result.innerHTML);
    valueOne = resultValue;
    result.innerHTML = "";
    sign = "*";
  }
});

div.addEventListener("click", () => {
  if (result.innerHTML != "" && sign == "") {
    valueOne = parseFloat(result.innerHTML);
    sign = div.innerHTML;
    result.innerHTML = "";
  } else if (result.innerHTML != "" && sign != "") {
    resultValue = eval(valueOne + sign + result.innerHTML);
    valueOne = resultValue;
    result.innerHTML = "";
    sign = div.innerHTML;
  }
});

sub.addEventListener("click", () => {
  if (result.innerHTML != "" && sign == "") {
    valueOne = parseFloat(result.innerHTML);
    sign = sub.innerHTML;
    result.innerHTML = "";
  } else if (result.innerHTML != "" && sign != "") {
    resultValue = eval(valueOne + sign + result.innerHTML);
    valueOne = resultValue;
    result.innerHTML = "";
    sign = sub.innerHTML;
  }
});
mod.addEventListener("click", () => {
  if (result.innerHTML != "" && sign == "") {
    valueOne = parseFloat(result.innerHTML);
    sign = mod.innerHTML;
    result.innerHTML = "";
  } else if (result.innerHTML != "" && sign != "") {
    resultValue = eval(valueOne + sign + result.innerHTML);
    valueOne = resultValue;
    result.innerHTML = "";
    sign = mod.innerHTML;
  }
});

equal.addEventListener("click", () => {
  if (result.innerHTML != "") {
    resultValue = eval(valueOne + sign + result.innerHTML);
    result.innerHTML = resultValue;
    sign = "";
  }
});

negate.addEventListener("click", () => {
  if (result.innerHTML != "") {
    let negation = -parseFloat(result.innerHTML);
    result.innerHTML = negation;
    valueOne = 0;
  }
});
