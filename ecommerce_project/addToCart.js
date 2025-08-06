import { getProductFromLS } from "./getProductFromLS";
import { updateCartValue } from "./updateCartValue";

getProductFromLS();
export const addToCart = (event, id, totalstoke) => {
  const productElem = document.querySelector(`#card${id}`);

  let arrCartProductLocalStorage = getProductFromLS();

  let productElemQuantity = productElem.querySelector(".quantity").innerText;
  let productElemPrice = productElem.querySelector(".actual-price").innerText;
  //   console.log(productElemQuantity, productElemPrice);

  productElemPrice = productElemPrice.replace("Rs", " ");

  let existingProduct = arrCartProductLocalStorage.find(
    (curProd) => curProd.id === id
  );

  if (existingProduct && productElemQuantity > 1) {
    productElemQuantity =
      Number(existingProduct.productElemQuantity) + Number(productElemQuantity);
    productElemPrice = Number(productElemPrice * productElemQuantity);
    let updateCart = { id, productElemPrice, productElemQuantity };
    updateCart = arrCartProductLocalStorage.map((curElm) => {
      return curElm.id === id ? updateCart : curElm;
    });
    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
  }

  if (existingProduct) {
    return false;
  }
  productElemPrice = Number(productElemPrice * productElemQuantity);
  productElemQuantity = Number(productElemQuantity);

  arrCartProductLocalStorage.push({
    id,
    productElemPrice,
    productElemQuantity,
  });
  localStorage.setItem(
    "cartProductLS",
    JSON.stringify(arrCartProductLocalStorage)
  );

  updateCartValue(arrCartProductLocalStorage);
};
