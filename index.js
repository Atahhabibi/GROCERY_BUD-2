import { generateID } from "./utill.js/generateID.js";
import { getElement } from "./utill.js/getElement.js";
import { showHighLight } from "./utill.js/highlight.js";
import {
  getItemsFromStroage,
  setItemToStorage,
} from "./utill.js/LocalStorage.js";
import { showUpdatedList } from "./utill.js/showContainer.js";

const inputDOM = getElement(".grocery-input");
const groceryFORM = getElement(".grocery-form");
const listContainerDOM = getElement(".list-container");
const clearBtnDOM = getElement(".clear-btn");

var editing = false;
var editingID;
var inputValue;


document.addEventListener("DOMContentLoaded", () => {
  let lists = [...getItemsFromStroage()];

  if (lists.length === 0) {
    clearBtnDOM.classList.add("hide-clearBtn");
  }

  showUpdatedList(lists); 


});

groceryFORM.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValue = inputDOM.value;

  if (inputValue === "") {
    console.log("Please enter name");
    inputDOM.focus();
    return;
  }

  if (editing) {
    console.log("its me");
    let items = getItemsFromStroage();

    items = items.map((item) => {
      if (item.id === editingID) {
        return { ...item, name: inputValue };
      } else {
        return item;
      }
    });

    setItemToStorage(items);

    showUpdatedList(items); 

    inputDOM.value = "";
    editing = false;
    showHighLight('item edited',"success")
    return;
  }

  let items = [...getItemsFromStroage()];

  items = [...items, { name: inputValue, id: generateID() }];

  inputDOM.value = "";

  setItemToStorage(items);
  showHighLight('item added',"success")


  let newItems = getItemsFromStroage();

  clearBtnDOM.classList.add("show-clearBtn");

  showUpdatedList(newItems); 
});

clearBtnDOM.addEventListener("click", () => {
  setItemToStorage([]);
  showHighLight("List Deleted","failure")
  setItemToStorage([])

  listContainerDOM.innerHTML = `<div>
    </div>`;

  clearBtnDOM.classList.add("hide-clearBtn");
  clearBtnDOM.classList.remove("show-clearBtn");
});

listContainerDOM.addEventListener("click", (e) => {
  const btnDOM = e.target;
  if (
    btnDOM.classList.contains("delete") ||
    btnDOM.classList.contains("fa-trash")
  ) {
    const articleDOM = btnDOM.parentElement.parentElement.parentElement;
    const articleID = articleDOM.dataset.id;

    let items = getItemsFromStroage();

    items = items.filter((item) => item.id != articleID);

    if (items.length === 0) {
      clearBtnDOM.classList.add("hide-clearBtn");
      clearBtnDOM.classList.remove("show-clearBtn");
    }

    setItemToStorage(items);
    showHighLight('item Deleted',"failure")
    showUpdatedList(items); 
  }
  if (
    btnDOM.classList.contains("edit") ||
    btnDOM.classList.contains("fa-pen-to-square")
  ) {
    editing = true;
    const articleDOM = btnDOM.parentElement.parentElement.parentElement;
    const articleID = articleDOM.dataset.id;

    editingID = articleID;

    let newItems = getItemsFromStroage();

    newItems.map((item) => {
      if (item.id === articleID) {
        inputDOM.value = item.name;
      }
    });
  }
});
