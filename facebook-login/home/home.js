let profileId = document.querySelector("#profile-id");
let loggedUsername = document.querySelector("#logged-username");
let displayUsername = document.querySelector("#username");
let loggedEmail = document.querySelector("#logged-email");
let userDetails = document.querySelector("#details");
let show = true;
let data = new URLSearchParams(window.location.search);
let username = data.get("username");
let email = data.get("email");
let loggedUserData = JSON.parse(localStorage.getItem("logged"));
let allUsers = JSON.parse(localStorage.getItem("users"));
displayUsername.innerHTML = loggedUserData.username;
let likesDiv = document.querySelector("#like");

(function () {
  if (loggedUserData) {
    loggedUsername.textContent = loggedUserData.username;
    loggedEmail.textContent = loggedUserData.email;
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

class post {
  constructor(content, publisher) {
    this.content = content;
    this.publisher = publisher;
    this.postTime = new Date().toISOString();
    this.likes = 0;
    this.comments = [];
  }
  increaseLikes() {
    this.likes++;
  }
}
let friendsPosts = [];
loggedUserData.friends.map((id) => {
  console.log(id);
  let otherposts = allUsers[id - 1].myPosts;
  friendsPosts = [...friendsPosts, ...otherposts];
});
console.log(friendsPosts);
let allPosts = [...friendsPosts, ...loggedUserData.myPosts];
allPosts.sort(() => {
  let num = Math.random() - 0.5;
  return num;
});

function publishPost() {
  let content = document.querySelector("#post-text");
  let owner = JSON.parse(localStorage.getItem("logged"));
  delete owner.password;
  let feedPost = new post(content.value, owner);
  console.log(feedPost);
  loggedUserData.myPosts.push(feedPost);
  allUsers[loggedUserData.id - 1] = loggedUserData;
  localStorage.setItem("logged", JSON.stringify(loggedUserData));
  localStorage.setItem("users", JSON.stringify(allUsers));
  renderPosts();
  content.value = "";
}

function renderPosts() {
  let feedPostsContainer = document.querySelector("#feed-posts");

  // console.log(allPosts);
  feedPostsContainer.innerHTML = "";

  allPosts.reverse().map((newPost) => {
    // console.log(newPost);
    createAt = new Date(newPost.postTime);

    feedPostsContainer.innerHTML += `
    <div class="feed-card">
              <div class="card-head">
                <div>
                  <img src="images/javed.png" alt="" class="feed-card-img" />
                </div>
                <div>
                  <div class="feed-heading">${newPost.publisher.username}</div>
                  <div>
                    ${createAt}
                    <svg
                      viewBox="0 0 16 16"
                      width="12"
                      height="12"
                      fill="currentColor"
                      title="Shared with Public"
                      class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                      style="--color: var(--secondary-icon)"
                    >
                      <title>Shared with Public</title>
                      <g fill-rule="evenodd" transform="translate(-448 -544)">
                        <g>
                          <path
                            d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                            transform="translate(354 143.5)"
                          ></path>
                          <path
                            d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                            transform="translate(354 143.5)"
                          ></path>
                          <path
                            fill-rule="nonzero"
                            d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                            transform="translate(354 143.5)"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="txt">
                ${newPost.content}
              </div>
              <div class="feed-card-main-img">
                <!-- <img src="images/pic1.jpg" alt="" /> -->
              </div>
              <div class="like">
                <span class="fc-icon" onclick="likeFunction(${newPost.publisher.id})" id="like${newPost.publisher.id}">
                <span id="likeCount">${newPost.likes}</span>
                  <i
                    data-visualcompletion="css-img"
                    class="x1b0d499 x1d69dk1"
                    style="
                      background-image: url('https://static.xx.fbcdn.net/rsrc.php/v4/y6/r/olX2yf1iinG.png?_nc_eui2=AeFjlCri4n8k2l4ThQepyLDgTRy-Yy01V8dNHL5jLTVXx2yJKNMkiizJQb6o-RZf9oxpqgGN8X9s471ZACnNT8tX');
                      background-position: 0px -798px;
                      background-size: auto;
                      width: 20px;
                      height: 20px;
                      background-repeat: no-repeat;
                      display: inline-block;
                    "
                  ></i>
                  Like
                </span>
                <span class="fc-icon">
                  <i
                    data-visualcompletion="css-img"
                    class="x1b0d499 x1d69dk1"
                    style="
                      background-image: url('https://static.xx.fbcdn.net/rsrc.php/v4/y6/r/olX2yf1iinG.png?_nc_eui2=AeFjlCri4n8k2l4ThQepyLDgTRy-Yy01V8dNHL5jLTVXx2yJKNMkiizJQb6o-RZf9oxpqgGN8X9s471ZACnNT8tX');
                      background-position: 0px -588px;
                      background-size: auto;
                      width: 20px;
                      height: 20px;
                      background-repeat: no-repeat;
                      display: inline-block;
                    "
                  ></i>
                  Comment
                </span>
                <span class="fc-icon">
                  <i
                    data-visualcompletion="css-img"
                    class="x1b0d499 x1d69dk1"
                    style="
                      background-image: url('https://static.xx.fbcdn.net/rsrc.php/v4/y6/r/olX2yf1iinG.png?_nc_eui2=AeFjlCri4n8k2l4ThQepyLDgTRy-Yy01V8dNHL5jLTVXx2yJKNMkiizJQb6o-RZf9oxpqgGN8X9s471ZACnNT8tX');
                      background-position: 0px -924px;
                      background-size: auto;
                      width: 20px;
                      height: 20px;
                      background-repeat: no-repeat;
                      display: inline-block;
                    "
                  ></i>

                  Share
                </span>
              </div>
            </div>
    `;
  });
}
renderPosts();
