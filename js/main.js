const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector('#email');
const eye1 = document.querySelector("#eye1");
const eye2 = document.querySelector("#eye2");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const form = document.getElementById("contact-form");
const regex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const matchMessage = document.querySelector(".match-message");
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

const checkPasswords = () => {
  if (password1.value.match(regex) && password2.value.match(regex)) {
    if (password1.value === password2.value) {
      console.log("Son iguales");
      matchMessage.textContent = "* Passwords matched";
      matchMessage.classList.remove("error");
      matchMessage.classList.add("success");
      password1.classList.remove("input-error");
      password1.classList.add("input-success");
      password1.blur();
      password2.classList.remove("input-error");
      password2.classList.add("input-success");
      password2.blur();
    }
  } else {
    if (password1.value !== password2.value) {
      console.log("Son distintas");
      matchMessage.textContent = "* Passwords not matched";
      matchMessage.classList.remove("success");
      matchMessage.classList.add("error");
      password1.classList.remove("input-success");
      password1.classList.add("input-error");
      password2.classList.remove("input-success");
      password2.classList.add("input-error");
    }
  }
};

password1.addEventListener("keyup", checkPasswords);
password2.addEventListener("keyup", checkPasswords);

eye1.addEventListener("click", showPassword1);
eye2.addEventListener("click", showPassword2);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.write('<a href="index.html">Back</a>');
  document.writeln(`
  <style>
  body{
  width:100%;
  height:100%;
  overflow:hidden;
  background-color: rgb(148 6 6 / 76%);
  background-image: url(../images/mountains.jpg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  background-blend-mode: darken;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
  }
  </style>
  <img style="width:3vw;" src='../images/Wikipedia_Sourcing_Month_Logo.svg'/>
  <h1>Welcome ${firstName.value} ${lastName.value} !</h1>
  <h2>Thanks for register with us!<h2>
  <p>You will receipe a message in <a href="mailto:${email.value}">${email.value}</a> in a few minutes.</p>
  
  `);
});
