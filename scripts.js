const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Input validation
  if (!dividend.trim() || !divider.trim() || isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page.";
    console.error("Invalid input: Non-numeric values provided");
    return;
  }

  //Error handling
  if (divider === "0") {
    result.innerText = "Division by zero is not allowed.";
    console.error("Invalid division: Division by zero");
    return;
  }

  //Result display
  const divisionResult = Math.floor(dividend / divider);
  result.innerText = divisionResult;
});
