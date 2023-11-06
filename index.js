let inputEl = document.getElementById("input-el");
let addBtn = document.getElementById("add-btn");
let items = document.getElementById("items");
items.innerHTML = localStorage.getItem("Items");
addBtn.addEventListener("click", function () {
  if (inputEl.value !== "") {
    let item = createItem(inputEl.value);
    items.appendChild(item);
    inputEl.value = "";
  }
  saveItems();
});

function createItem(value) {
  let li = document.createElement("li");
  let itemVal = document.createElement("span");
  let delBtn = document.createElement("span");
  li.id = "item";
  itemVal.appendChild(document.createTextNode(value));
  delBtn.appendChild(document.createTextNode("x"));
  delBtn.id = "remove";
  li.appendChild(itemVal);
  li.appendChild(delBtn);

  return li;
}

items.addEventListener("click", (e) => {
  let target = e.target;
  if (target.id === "remove") {
    target.parentElement.remove();
    saveItems();
    items.innerHTML = localStorage.getItem("Items");
  }
});

function saveItems() {
  localStorage.setItem("Items", items.innerHTML);
}
