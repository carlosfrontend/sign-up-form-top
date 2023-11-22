const firstName = document.querySelector("#firstname");
const eye1 = document.querySelector("#eye1");
const eye2 = document.querySelector("#eye2");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

firstName.focus(); // Puts the focus in the first field

const showPassword1 = () => {
  if (password1.type === "password") {
    password1.type = "text";
    eye1.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password1.type = "password";
    eye1.classList.replace("fa-eye-slash", "fa-eye");
  }
};

const showPassword2 = () => {
  if (password2.type === "password") {
    password2.type = "text";
    eye2.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password2.type = "password";
    eye2.classList.replace("fa-eye-slash", "fa-eye");
  }
};

eye1.addEventListener("click", showPassword1);
eye2.addEventListener("click", showPassword2);
