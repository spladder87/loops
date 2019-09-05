let arr = [
  "Fortnite",
  "Sportskytte",
  "Cykling",
  "Innebandy",
  "Programmering"
];

let list = document.createElement("ul");

for (let i = 0; i < arr.length; i++) {
  let elem = document.createElement("li");
  elem.innerText = arr[i];
  list.appendChild(elem);
  document.body.appendChild(list);
};


