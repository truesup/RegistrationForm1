document.addEventListener("DOMContentLoaded", function () {
  const langSettings = document.querySelector(".lang_settings");
  const registrationForm = document.querySelector(".container");
  const continueBtn = document.getElementById("continue_btn");
  continueBtn.addEventListener("click", function () {
    langSettings.style.opacity = "0";
    langSettings.style.transform = "translateY(-120%)";
    registrationForm.style.opacity = "1";
    registrationForm.style.transform = "translateY(-25%)";
  });
});
