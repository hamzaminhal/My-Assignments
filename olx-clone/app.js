const modal = document.getElementById("authModal");
const modalTitle = document.getElementById("modalTitle");
const usernameField = document.getElementById("usernameField");
const emailFieald = document.getElementById("emailField");
const passwordField = getElementById("passwordField");
const authBtn = document.getElementById("authBtn");
let msg = document.querySelector("#msg");
let form = document.getElementById("authForm");
let users = [];

function showModal(type) {
  if (type === "login") {
    modalTitle.textContent = "Login";
    usernameField.style.display = "none";
    authBtn.textContent = "Login";
    msg.innerHTML = `For Registration <a href="javascript:void(0)" onclick="showModal('signup')"
              >Signup</a
            > here`;
  } else {
    modalTitle.textContent = "Signup";
    usernameField.style.display = "block";
    authBtn.textContent = "Signup";
    msg.innerHTML = `Already registered <a href="javascript:void(0)" onclick="showModal('login')"
              >Login</a
            > here`;
  }

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(usernameField.value);
  console.log(usernameField.value);
  // const type = document.getElementById("modalTitle").textContent.toLowerCase();
  // alert(`${type.charAt(0).toUpperCase() + type.slice(1)} submitted!`);
  closeModal();
});
