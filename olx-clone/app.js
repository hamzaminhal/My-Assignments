const modal = document.getElementById("authModal");
const modalTitle = document.getElementById("modalTitle");
const usernameField = document.getElementById("usernameField");
const emailField = document.getElementById("emailField");
const passwordField = document.getElementById("passwordField");
const confirmPasswordField = document.getElementById("confirmPasswordField");
const authBtn = document.getElementById("authBtn");
let msg = document.querySelector("#msg");
let form = document.getElementById("authForm");
let users = [];

class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
}

function showModal(type) {
  if (type === "login") {
    modalTitle.textContent = "Login";
    usernameField.style.display = "none";
    authBtn.textContent = "Login";
    msg.innerHTML = `For Registration <a href="javascript:void(0)" onclick="showModal('signup')">Signup</a> here`;
  } else {
    modalTitle.textContent = "Signup";
    usernameField.style.display = "block";
    authBtn.textContent = "Signup";
    msg.innerHTML = `Already registered <a href="javascript:void(0)" onclick="showModal('login')">Login</a> here`;
  }

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const type = modalTitle.textContent.toLowerCase();
  const userName = usernameField.value;
  const email = emailField.value;
  const password = passwordField.value;

  if (type === "signup") {
    if (!userName || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    const newUser = new User(userName, email, password);
    users.push(newUser);
    console.log("Signup Success:", newUser);
    alert("Signup successful!");
  } else {
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      alert(`Welcome back, ${existingUser.userName}!`);
    } else {
      alert("Invalid email or password!");
    }
  }

  form.reset();
  closeModal();
});
