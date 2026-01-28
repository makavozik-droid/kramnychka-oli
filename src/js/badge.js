import { getCart } from "./storage.js";

export function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;

  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);

  if (count > 0) {
    badge.textContent = String(count);
    badge.classList.add("is-visible");
  } else {
    badge.textContent = "";
    badge.classList.remove("is-visible");
  }
}
