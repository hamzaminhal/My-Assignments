// let signupElement = document.querySelector("#openSignup");
// let loginElement = document.querySelector("#openLogin");

// loginBtn.style.display = "none";

function showModal(type) {
  const modal = document.getElementById("authModal");
  const modalTitle = document.getElementById("modalTitle");
  const usernameField = document.getElementById("usernameField");
  const confirmPasswordField = document.getElementById("confirmPasswordField");
  const authBtn = document.getElementById("authBtn");

  if (type === "login") {
    modalTitle.textContent = "Login";
    usernameField.style.display = "none";
    confirmPasswordField.style.display = "none";
    authBtn.textContent = "Login";
  } else {
    modalTitle.textContent = "Signup";
    usernameField.style.display = "block";
    confirmPasswordField.style.display = "block";
    authBtn.textContent = "Signup";
  }

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

document.getElementById("authForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const type = document.getElementById("modalTitle").textContent.toLowerCase();
  alert(`${type.charAt(0).toUpperCase() + type.slice(1)} submitted!`);
  closeModal();
});
