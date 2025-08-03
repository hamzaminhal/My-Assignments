let friendsRequestContainer = document.querySelector("#requests");
let allUsers = JSON.parse(localStorage.getItem("users") || []);
let loggedInUser = JSON.parse(localStorage.getItem("logged"));
let friendList = [];
const confirmBtn = document.querySelector("#confirm");

(function () {
  friendList = allUsers.filter((user) => user.id !== loggedInUser.id);
  console.log(friendList);
  friendList.map((user) => {
    friendsRequestContainer.innerHTML += `
  <div class="request-card">
  
        <div id="fb">
          <div id="fb-top">
            <p>
              <b>Friend Requests</b><span>Find Friends &bull; Settings</span>
            </p>
          </div>
          <img
            src="./images/images.png"
            height="100"
            width="100"
            alt="Image of woman"
          />
          <p id="info">
            <b>${user.username}</b> <br />
            <span>14 mutual friends</span>
          </p>
          <div id="button-block">
            <div id="confirm" onclick="addFriend(${user.id})">Confirm</div>
            <div id="delete">Delete Request</div>
          </div>
        </div>
        
  </div>
  `;
  });
})();

function addFriend(friendId) {
  loggedInUser.friends.push(friendId);
  allUsers[loggedInUser.id - 1] = loggedInUser;
  console.log(allUsers);
  localStorage.setItem("users", JSON.stringify(allUsers));
}
