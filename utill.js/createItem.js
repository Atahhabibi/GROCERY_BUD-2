export const createItem = (item) => {
  const newItem = `<article class="item" data-id="${item.id}">
    <h5 class="item-name">${item.name}</h5>
    <div class="icons">
      <button class="edit">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
      <button class="delete">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </article>`;

  return newItem;
};
