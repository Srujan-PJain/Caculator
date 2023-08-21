const result = document.querySelector("#result");
const clear = document.querySelector("#clear");

const testfunc = () => {
  console.log("work");
  result.innerText = "hello world";
};
clear.addEventListener("click", () => testfunc());
