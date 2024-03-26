import { users } from "./db.js";

let russian = document.querySelector("#russian");
let american = document.querySelector("#american");
let follows = [];

function reload(users, place) {
  for (let item of users) {
    let card = document.createElement("div");
    let avatar = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("div");
    let email = document.createElement("div");
    let btn = document.createElement("button");
    let follow = document.querySelector(".follow");



    card.classList.add("card");
    avatar.classList.add("avatar");
    name.classList.add("name");
    email.classList.add("email");
    btn.classList.add("btn");

    img.setAttribute("src", item.photo);



    btn.innerHTML = "Follow";
    name.innerHTML = item.name;
    email.innerHTML = item.email;




    avatar.append(img);
    card.append(avatar, name, email, btn);
    place.append(card);




    btn.onclick = () => {
      if (btn.classList.contains("unfollow")) {
        btn.classList.remove("unfollow");
        btn.textContent = "Follow";
      } else {
        btn.classList.add("unfollow");
        btn.textContent = "Unfollow";
      }
      followbtn(item);
    };
  }
}




function followbtn(user) {
  if (!follows.includes(user)) {
    follows.push(user);
    sblist();
  } else {
    follows = follows.filter(
      (subscription) => subscription !== user
    );
    sblist();
  }
}




function UsersNation(nationId, container) {
  let usrfilter = users.filter((user) => user.nation === nationId);
  reload(usrfilter, container);
}
UsersNation("russian", russian);
UsersNation("american", american);

let closebtn = document.querySelector(".close");
closebtn.onclick = () => {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");

};

let followButton = document.querySelector(".follow");
followButton.onclick = () => {
  let modal = document.getElementById("modal");
  modal.style.display = "block";
  document.body.classList.add("modal-open");
};





function sblist() {
  let subscriptionList = document.getElementById("subscription-list");
  subscriptionList.innerHTML = "";
  follows.forEach((user) => {
    let listItem = document.createElement("div");
    listItem.innerHTML = user.name;
    subscriptionList.appendChild(listItem);
  });
}
