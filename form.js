function handleFormSubmit(event) {
  console.log("нажатие");
  event.preventDefault();
}
const applicantForm = document.getElementById("myForm");
applicantForm.addEventListener("submit", handleFormSubmit);

const myBtn = document.getElementById("myBtn");

const labelForName = document.getElementById("labelForName");
const inputName = document.getElementById("name");
const invalidName = document.getElementById("invalidName");
inputName.oninput = () => {
  if (inputName.checkValidity()) {
    labelForName.style.color = "#000";
    invalidName.textContent = "";
  } else {
    labelForName.style.color = "#ff0000";
    invalidName.textContent = "nope";
  }
};

const labelForSurname = document.getElementById("labelForSurname");
const inputSurname = document.getElementById("surname");
const invalidSurname = document.getElementById("invalidSurname");
inputSurname.oninput = () => {
  if (inputSurname.checkValidity()) {
    labelForSurname.style.color = "#000";
    invalidSurname.textContent = "";
  } else {
    labelForSurname.style.color = "#ff0000";
    invalidSurname.textContent = "nope";
  }
};

const labelForPhone = document.getElementById("labelForPhone");
const inputPhone = document.getElementById("phone");
const invalidPhone = document.getElementById("invalidPhone");
inputPhone.oninput = () => {
  if (inputPhone.checkValidity()) {
    labelForPhone.style.color = "#000";
    invalidPhone.textContent = "";
  } else {
    labelForPhone.style.color = "#ff0000";
    invalidPhone.textContent = "nope";
  }
};

const labelForEmail = document.getElementById("labelForEmail");
const inputEmail = document.getElementById("email");
const invalidEmail = document.getElementById("invalidEmail");
inputEmail.oninput = () => {
  if (inputEmail.checkValidity()) {
    labelForEmail.style.color = "#000";
    invalidEmail.textContent = "";
  } else {
    labelForEmail.style.color = "#ff0000";
    invalidEmail.textContent = "nope";
  }
};

const labelForPassword = document.getElementById("labelForPassword");
const inputPassword = document.getElementById("password");
const invalidPassword = document.getElementById("invalidPassword");
inputPassword.oninput = () => {
  if (inputPassword.checkValidity()) {
    labelForPassword.style.color = "#000";
    invalidPassword.textContent = "";
  } else {
    labelForPassword.style.color = "#ff0000";
    invalidPassword.textContent = "nope";
  }
};
