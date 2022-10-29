const username = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBtn = document.querySelector(".submit-btn");

const showError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.add("error");
};

const removeError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el);
    } else {
      removeError(el);
    }
  });
};

const checkMail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    removeError(email);
  } else {
    showError(email);
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = [username, surname, email, password];

  checkForm(inputs);
  checkMail(email);

});
