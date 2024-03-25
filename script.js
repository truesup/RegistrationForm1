//кнопку сделал неактивной
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

const labelForSurname = document.getElementById("labelForSurname");
const inputSurname = document.getElementById("surname");
const invalidSurname = document.getElementById("invalidSurname");

const labelForPhone = document.getElementById("labelForPhone");
const inputPhone = document.getElementById("phone");
const invalidPhone = document.getElementById("invalidPhone");

const labelForEmail = document.getElementById("labelForEmail");
const inputEmail = document.getElementById("email");
const invalidEmail = document.getElementById("invalidEmail");

const labelForPassword = document.getElementById("labelForPassword");
const inputPassword = document.getElementById("password");
const invalidPassword = document.getElementById("invalidPassword");

inputName.oninput = () => {
  if (inputName.value.length < 2) {
    labelForName.style.color = "#ff0000";
    invalidName.textContent = "Your name can`t be less than 2 letters";
  } else {
    labelForName.style.color = "#000";
    invalidName.textContent = "";
  }
};
inputSurname.oninput = () => {
  if (inputSurname.value.length < 2) {
    labelForSurname.style.color = "#ff0000";
    invalidSurname.textContent = "Your surname can`t be less than 2 letters";
  } else {
    labelForSurname.style.color = "#000";
    invalidSurname.textContent = "";
  }
};
inputPhone.oninput = () => {
  if (inputPhone.value.length < 10) {
    labelForPhone.style.color = "#ff0000";
    invalidPhone.textContent =
      "Even the shortest mobile number contains 10 digits";
  } else {
    labelForPhone.style.color = "#000";
    invalidPhone.textContent = "";
  }
};
inputEmail.oninput = () => {
  if (inputEmail.value.includes("@")) {
    labelForEmail.style.color = "#000";
    invalidEmail.textContent = "";
  } else {
    labelForEmail.style.color = "#ff0000";
    invalidEmail.textContent = "There should be @, definetely";
  }
};
inputPassword.oninput = () => {
  if (inputPassword.value.length < 5) {
    labelForPassword.style.color = "#ff0000";
    invalidPassword.textContent = "Minimum 5 symbols";
  } else {
    labelForPassword.style.color = "#000";
    invalidPassword.textContent = "";
  }
};
