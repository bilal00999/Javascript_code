export const homeQuantityToggele = (event, id, stoke) => {
  const currentCrdElement = document.querySelector(`#card${id}`);

  const productQuantity = currentCrdElement.querySelector(".quantity");

  let qunatity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (event.target.className === "increment-btn") {
    if (qunatity < stoke) {
      qunatity += 1;
    } else if (qunatity === stoke) {
      qunatity = stoke;
    }
  }

  if (event.target.className === "decrement-btn") {
    if (qunatity > 1) {
      qunatity -= 1;
    }
  }

  productQuantity.innerText = qunatity;
  productQuantity.setAttribute("data-quantity", qunatity);
  return qunatity;
};
