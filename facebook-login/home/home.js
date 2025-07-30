let profileId = document.querySelector("#profile-id");
let loggedUsername = document.querySelector("#logged-username");
let loggedEmail = document.querySelector("#logged-email");
let userDetails = document.querySelector("#details");
let show = true;

let data = new URLSearchParams(window.location.search);
let username = data.get("username");
let email = data.get("email");
// console.log(username);
// console.log(email);

(function () {
  const loggedUserData = JSON.parse(localStorage.getItem("logged"));
  if (loggedUserData) {
    loggedUsername.textContent = loggedUserData.username;
    loggedEmail.textContent = loggedUserData.email;
    // toggle();
  } else {
    swal("UnAuthorized Access", "Please Login First!", "warning").then(() => {
      window.location.assign("../login/index.html");
    });
  }
})();

profileId.addEventListener("click", () => {
  // console.log(profileId);
  if (show) {
    console.log(show);
    userDetails.classList.remove("hide");
    show = false;
  } else {
    console.log(show);
    userDetails.classList.add("hide");
    show = true;
  }
});

function logout() {
  localStorage.removeItem("logged");
  userDetails.classList.add("hide");
  swal("Success", "Logged Out Succesfully", "info").then(() => {
    window.location.assign("../login/index.html");
  });
}
