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

i18next.init(
  {
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          selLabel: "Choose language",
          selButton: "Continue",
          formTopping: "User register form",
          labelForName: "Name",
          labelForSurname: "Surname",
          labelForPhone: "Mobile phone number",
          labelForEmail: "Email",
          labelForPassword: "Create password",
          myBtn: "Register",
          invalidNameMessage:
            "The first letter should be capitalized, the rest should be lowercase. The minimum is 2 letters.",
          invalidSurnameMessage:
            "The first letter should be capitalized, the rest should be lowercase. The minimum is 2 letters.",
          invalidPhoneMessage: "Just the numbers. At least 10.",
          invalidEmailMessage: "The @ sign and domain are required",
          invalidPasswordMessage:
            "Minimum of 5 characters, at least one number and letter.",
        },
      },
      ru: {
        translation: {
          selLabel: "Выберите язык",
          selButton: "Продолжить",
          formTopping: "Форма регистрации",
          labelForName: "Имя",
          labelForSurname: "Фамилия",
          labelForPhone: "Номер мобильного телефона",
          labelForEmail: "Электронная почта",
          labelForPassword: "Придумайте пароль",
          myBtn: "Регистрация",
          invalidNameMessage:
            "Первая буква должна быть заглавной, остальные - строчные. Минимум - 2 буквы.",
          invalidSurnameMessage:
            "Первая буква должна быть заглавной, остальные - строчные. Минимум - 2 буквы.",
          invalidPhoneMessage: "Только цифры. Минимум 10.",
          invalidEmailMessage: "Обязателен знак @ и домен.",
          invalidPasswordMessage:
            "Минимум 5 символов, хотя бы одна цифра и буква.",
        },
      },
    },
  },
  function (err, t) {
    document.getElementById("sel_label").innerHTML = i18next.t("selLabel");
    document.getElementById("continue_btn").innerHTML = i18next.t("selButton");
    document.getElementById("formTopping").innerHTML = i18next.t("formTopping");
    document.getElementById("labelForName").innerHTML =
      i18next.t("labelForName");
    inputName.oninput = () => {
      if (inputName.checkValidity()) {
        labelForName.style.color = "#000";
        invalidName.textContent = "";
      } else {
        labelForName.style.color = "#ff0000";
        invalidName.textContent = i18next.t("invalidNameMessage");
      }
    };

    document.getElementById("labelForSurname").innerHTML =
      i18next.t("labelForSurname");
    inputSurname.oninput = () => {
      if (inputSurname.checkValidity()) {
        labelForSurname.style.color = "#000";
        invalidSurname.textContent = "";
      } else {
        labelForSurname.style.color = "#ff0000";
        invalidSurname.textContent = i18next.t("invalidSurnameMessage");
      }
    };
    document.getElementById("labelForPhone").innerHTML =
      i18next.t("labelForPhone");
    inputPhone.oninput = () => {
      if (inputPhone.checkValidity()) {
        labelForPhone.style.color = "#000";
        invalidPhone.textContent = "";
      } else {
        labelForPhone.style.color = "#ff0000";
        invalidPhone.textContent = i18next.t("invalidPhoneMessage");
      }
    };
    document.getElementById("labelForEmail").innerHTML =
      i18next.t("labelForEmail");
    inputEmail.oninput = () => {
      if (inputEmail.checkValidity()) {
        labelForEmail.style.color = "#000";
        invalidEmail.textContent = "";
      } else {
        labelForEmail.style.color = "#ff0000";
        invalidEmail.textContent = i18next.t("invalidEmailMessage");
      }
    };
    document.getElementById("labelForPassword").innerHTML =
      i18next.t("labelForPassword");
    inputPassword.oninput = () => {
      if (inputPassword.checkValidity()) {
        labelForPassword.style.color = "#000";
        invalidPassword.textContent = "";
      } else {
        labelForPassword.style.color = "#ff0000";
        invalidPassword.textContent = i18next.t("invalidPasswordMessage");
      }
    };
    document.getElementById("myBtn").innerHTML = i18next.t("myBtn");
  }
);
const sel = document.getElementById("lang_select");
sel.onchange = () => {
  const lang = sel.value;

  i18next.changeLanguage(lang, (err, t) => {
    if (err) {
      return console.log("something went wrong loading", err);
    }
    document.getElementById("sel_label").innerHTML = t("selLabel");
    document.getElementById("continue_btn").innerHTML = t("selButton");
    document.getElementById("formTopping").innerHTML = t("formTopping");
    document.getElementById("labelForName").innerHTML = t("labelForName");
    document.getElementById("labelForSurname").innerHTML = t("labelForSurname");
    document.getElementById("labelForPhone").innerHTML = t("labelForPhone");
    document.getElementById("labelForEmail").innerHTML = t("labelForEmail");
    document.getElementById("labelForPassword").innerHTML =
      t("labelForPassword");
    document.getElementById("myBtn").innerHTML = t("myBtn");
  });
};
