// initialization of variables

let modal = document.getElementById("authModal");
let modalTitle = document.getElementById("modalTitle");
let usernameField = document.getElementById("usernameField");
let emailField = document.getElementById("emailField");
let passwordField = document.getElementById("passwordField");
let confirmPasswordField = document.getElementById("confirmPasswordField");
let authBtn = document.getElementById("authBtn");
let msg = document.querySelector("#msg");
let form = document.getElementById("authForm");
let loginBtn = document.getElementById("loginBtn");
let profile = document.getElementById("user");
let users = JSON.parse(localStorage.getItem("users")) || [];

//   User class

class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
}

//function to show model

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

// function to close Model

function closeModal() {
  modal.style.display = "none";
}

// action after submission of form

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
    const checkUser = users.find((user) => user.email === email);
    if (checkUser) {
      alert("User ALready Exists");
    } else {
      const newUser = new User(userName, email, password);
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful!");
    }
  } else {
    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (existingUser) {
      console.log(existingUser);
      alert(`Welcome back, ${existingUser.userName}!`);
      localStorage.setItem("logged", JSON.stringify(existingUser));
      loginBtn.style.display = "none";
      profile.style.display = "block";
      profile.innerHTML = `
      <img src="" id='profile-img' alt="">
            <span>${
              JSON.parse(localStorage.getItem("logged")).userName
            }</span>`;
    } else {
      alert("Invalid credentials!");
    }
  }

  form.reset();
  closeModal();
});
