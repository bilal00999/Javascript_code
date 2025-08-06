const Showcart = document.querySelector(".show-add-to-cart");

export const updateCartValue = (cartValue) => {
  return (Showcart.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartValue.length}</i>`);
};
