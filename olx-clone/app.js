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
let profile = document.getElementById("profile");
let userDetails = document.getElementById("details");
let loggedUsername = document.getElementById("logged-username");
let loggedEmail = document.getElementById("logged-email");
let users = JSON.parse(localStorage.getItem("users")) || [];
let click = true;

// User class
class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
}

// Show modal
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

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Form submission
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
      alert("User already exists!");
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
      alert(`Welcome back, ${existingUser.userName}!`);
      localStorage.setItem("logged", JSON.stringify(existingUser));
      loginBtn.style.display = "none";
      profile.style.display = "block";
      profile.innerHTML = `
        <img src="images/mobile.png" id='profile-img' alt="profile image"/>
        <span>${existingUser.userName}</span>
      `;
      loggedUsername.textContent = loggedUser.userName;
      loggedEmail.textContent = loggedUser.email;
      attachProfileToggle();
    } else {
      alert("Invalid credentials!");
    }
  }

  form.reset();
  closeModal();
});

// Auto login if already logged in
(function () {
  const loggedUser = JSON.parse(localStorage.getItem("logged"));
  if (loggedUser) {
    loginBtn.style.display = "none";
    profile.style.display = "block";
    profile.innerHTML = `
      <img src="images/mobile.png" id='profile-img' alt="profile image"/>
      <span>${loggedUser.userName}</span>
    `;
    loggedUsername.textContent = loggedUser.userName;
    loggedEmail.textContent = loggedUser.email;
    attachProfileToggle();
  }
})();

// Attach toggle function to profile image
function attachProfileToggle() {
  let profileImg = document.getElementById("profile-img");

  if (profileImg) {
    profileImg.addEventListener("click", () => {
      console.log(profileImg);
      if (click) {
        userDetails.classList.remove("hide");
        click = false;
      } else {
        userDetails.classList.add("hide");
        click = true;
      }
    });
  }
}

// Logout function
function logout() {
  localStorage.removeItem("logged");
  loginBtn.style.display = "block";
  profile.style.display = "none";
  userDetails.classList.add("hide");
}

let api = "https://dummyjson.com/products";
const loader = document.getElementById("loader");
let productContainer = document.querySelector("#product-container");
(async function () {
  let res = await fetch(api);
  let data = await res.json();
  let { products } = data;
  console.log(products);
  loader.style.display = "none";
  showCards(products);
})();

function showCards(products) {
  products.map((product) => {
    let {
      brand,
      category,
      description,
      images,
      price,
      rating,
      title,
      shippingInformation,
    } = product;
    productContainer.innerHTML += `
    <div class="product-card">
      <img
        src="${images[0]}"
        alt="Product Image"
        class="product-image"
      />

      <div class="product-details">
        <div class="product-title">${title}</div>
        <div class="brand-category">${category}</div>
        <div class="description">
          ${description}
        </div>
        <div class="price">$${price}</div>
        <div class="shipping">Shipping: ${shippingInformation}</div>
        <div class="rating">
          <span class="star">★</span><span class="star">★</span
          ><span class="star">★</span><span class="star">★</span
          ><span class="star">☆</span>
          <span>(${rating}/5)</span>
        </div>
      </div>
    </div>
    `;
  });
}

window.addEventListener("load", function () {
  loader.style.opacity = "1";
});
