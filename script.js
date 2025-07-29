const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function decimalToBinary(n) {
  if (n === 0) return "0";
  if (n === 1) return "1";
  return decimalToBinary(Math.floor(n / 2)) + (n % 2);
}

convertBtn.addEventListener("click", () => {
  const value = Number(numberInput.value);
  if (Number.isInteger(value) && value >= 0) {
    result.textContent = decimalToBinary(value);
  } else {
    result.textContent = "Please enter a valid positive integer.";
  }
});
