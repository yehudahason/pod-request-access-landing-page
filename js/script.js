const form = document.getElementById("accessForm");
const emailInput = document.getElementById("email");
const toast = document.getElementById("toast");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page refresh

  let emailValue = emailInput.value;
  emailValue = emailValue.trim();
  if (emailValue === "") {
    toast.innerText = "Oops! Please add your email";
    toast.style.color = "red";
    alertState(true);
  } else if (!emailIsValid(emailValue)) {
    toast.innerText = "Oops! Please check your email";
    toast.style.color = "red";
    alertState(true);
  } else {
    alertState(false);
    toast.innerText = "OK!";
    toast.style.color = "green";
  }
});

function alertState(active) {
  if (active) {
    input.classList.add("active");
  } else {
    input.classList.remove("active");
  }
}

// SIMPLE EMAIL REGEX CHECK  https://ui.dev/validate-email-address-javascript
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
