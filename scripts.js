const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Input validation
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page.";
    console.error("Invalid input: Non-numeric values provided");
    return;
  }

  //Error handling
  if (divider === "0") {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Invalid division: Division by zero");
    return;
  }

  //Display result in a case of no input
  if (dividend === "" || divider === "") {
    result.innerText = "No calculation performed";
    return;
  }

  //Result display
  const divisionResult = Math.floor(dividend / divider);
  result.innerText = divisionResult;
});
