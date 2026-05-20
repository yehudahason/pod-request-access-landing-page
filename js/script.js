const form = document.getElementById("accessForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page refresh

  let emailValue = emailInput.value;
  emailValue = emailValue.trim();
  if (emailValue === "") {
    message.innerText = "Oops! Please add your email";
    message.style.color = "red";
    alertState(true);
  } else if (!emailIsValid(emailValue)) {
    message.innerText = "Oops! Please check your email";
    message.style.color = "red";
    alertState(true);
  } else {
    alertState(false);
    message.innerText = "Thanks! We'll be in touch soon.";
    message.style.color = "#54e6af";
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
