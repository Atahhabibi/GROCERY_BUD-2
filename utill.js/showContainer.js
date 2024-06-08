import { createItem } from "./createItem.js"
import { getElement } from "./getElement.js";

const listContainerDOM=getElement(".list-container");

export const showUpdatedList=(lists)=>{
    lists = lists
    .map((item) => {
      const itemHTML = createItem(item);
      return itemHTML;
    })
    .join("");

  listContainerDOM.innerHTML = lists;
}