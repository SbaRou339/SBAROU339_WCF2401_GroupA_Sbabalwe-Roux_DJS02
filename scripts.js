const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Input validation
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML =
      "Something critical went wrong. Please reload the page.";
    console.error("Invalid input: Non-numeric values provided");
    return;
  }

  if (!dividend.trim() || !divider.trim()) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    console.error(
      "Division not performed. Both values are required in inputs. Try again"
    );
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
