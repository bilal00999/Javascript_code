import { addToCart } from "./addToCart";
import { homeQuantityToggele } from "./homeQuantityToggele";

let productTemplate = document.querySelector(".product-template");
let productContainer = document.querySelector(".product-container");

export const getShowData = (product) => {
  if (!product) {
    return false;
  }
  product.forEach((proElem) => {
    const {
      id,
      name,
      categoery,
      image,
      description,
      actualprice,
      estemetedprice,
      totalstoke,
    } = proElem;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardvalue").setAttribute("id", `card${id}`);
    productClone.querySelector(".product-name").textContent = name;
    productClone.querySelector(".categoery").textContent = categoery;
    productClone.querySelector(".product-image").src = image;
    productClone.querySelector(".product-description").textContent =
      description;
    productClone.querySelector(
      ".actual-price"
    ).textContent = `Rs${actualprice}`;
    productClone.querySelector(
      ".estemeted-price"
    ).textContent = `Rs${estemetedprice}`;
    productClone.querySelector(".total-stoke").textContent = totalstoke;

    productClone
      .querySelector(".product-qunatity-border")
      .addEventListener("click", (event) => {
        homeQuantityToggele(event, id, totalstoke);
      });

    productClone
      .querySelector(".add-to-cart")
      .addEventListener("click", (event) => {
        addToCart(event, id, totalstoke);
      });
    productContainer.append(productClone);
  });
};
