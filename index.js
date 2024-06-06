import { createItem } from "./utill.js/createItem.js";
import { generateID } from "./utill.js/generateID.js";
import { getElement } from "./utill.js/getElement.js";
import {
  getItemsFromStroage,
  setItemToStorage,
} from "./utill.js/LocalStorage.js";

const inputDOM = getElement(".grocery-input");
const groceryFORM = getElement(".grocery-form");
const listContainerDOM = getElement(".list-container");
const clearBtnDOM = getElement(".clear-btn");


let items = [...getItemsFromStroage()];

document.addEventListener("DOMContentLoaded", () => {
  let lists = [...getItemsFromStroage()];

  console.log(lists.length);

  if (lists.length === 0) {
    clearBtnDOM.classList.add("hide-clearBtn");
  }

  lists = lists
    .map((item) => {
      const itemHTML = createItem(item);
      return itemHTML;
    })
    .join("");

  listContainerDOM.innerHTML = lists;
});

groceryFORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = inputDOM.value;

  if (inputValue === "") {
    console.log("Please enter name");
    inputDOM.focus();
    return;
  }

  items = [...items, { name: inputValue, id: generateID() }];

  inputDOM.value = "";

  setItemToStorage(items);

  let newItems = getItemsFromStroage();

  clearBtnDOM.classList.add("show-clearBtn");

  newItems = newItems
    .map((item) => {
      const itemHTML = createItem(item);
      return itemHTML;
    })
    .join("");

  listContainerDOM.innerHTML = newItems;
  
  const deleteBtn=getElement('.delete'); 
  const editBtn=getElement('.edit'); 

  console.log(deleteBtn);






 




});

clearBtnDOM.addEventListener("click", () => {
  setItemToStorage([]);
  items = [];
  listContainerDOM.innerHTML = `<div>
    </div>`;

  clearBtnDOM.classList.add("hide-clearBtn");
  clearBtnDOM.classList.remove("show-clearBtn"); 
});


