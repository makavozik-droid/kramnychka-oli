import { updateCartBadge } from "./badge.js";
import { loadProducts } from "./data.js";
import { getCart } from "./storage.js";
import { formatUAH } from "./dom.js";

const itemsField = document.getElementById("orderItemsField");
const totalField = document.getElementById("orderTotalField");
const submitBtn = document.getElementById("submitOrderBtn");

(async function init() {
    updateCartBadge();
  const cart = getCart();

  // Якщо кошик порожній — блокуємо відправку
  if (cart.length === 0) {
    if (itemsField) itemsField.value = "Кошик порожній";
    if (totalField) totalField.value = "0 грн";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Додайте товар у кошик";
    }
    return;
  }

  let products;
  try {
    products = await loadProducts();
  } catch (err) {
    if (itemsField) itemsField.value = "Помилка завантаження товарів";
    if (totalField) totalField.value = "0 грн";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Спробуйте пізніше";
    }
    return;
  }

  const lines = [];
  let total = 0;

  cart.forEach((item) => {
    const p = products.find((x) => x.id === item.productId);
    if (!p) return;

    const rowTotal = p.priceUAH * item.qty;
    total += rowTotal;

    lines.push(`${p.name} — ${item.qty} × ${p.priceUAH} грн = ${rowTotal} грн`);
  });

  if (itemsField) itemsField.value = lines.join(" | ");
  if (totalField) totalField.value = formatUAH(total);
})();

