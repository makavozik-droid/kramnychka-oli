import { updateCartBadge } from "./badge.js";
import { loadProducts } from "./data.js";
import { el, formatUAH } from "./dom.js";
import { getCart, removeFromCart, updateQty } from "./storage.js";

const cartList = document.getElementById("cartList");
const totalPriceEl = document.getElementById("totalPrice");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartSummary = document.getElementById("cartSummary");
const backToCatalog = document.getElementById("backToCatalog");
const LAST_CATALOG_HASH_KEY = "kramnychka:lastCatalogHash";

function cartRow(product, qty) {
  const row = el("div", { className: "cartRow" });

  const left = el("div", { className: "cartRow__left" });
  const title = el("div", { className: "cartRow__title", text: product.name });
  const meta = el("div", { className: "cartRow__meta", text: `${product.category} • ${formatUAH(product.priceUAH)} / ${product.unit}` });
  left.append(title, meta);

  const right = el("div", { className: "cartRow__right" });

  const qtyInput = el("input", { className: "qty", type: "number" });
  qtyInput.min = "1";
  qtyInput.value = String(qty);
  qtyInput.addEventListener("change", () => {
    updateQty(product.id, Number(qtyInput.value || 1));
    updateCartBadge()
    render();
  });

  const removeBtn = el("button", { className: "btnSecondary", text: "Прибрати" });
  removeBtn.addEventListener("click", () => {
    removeFromCart(product.id);
    render();
  });

  right.append(qtyInput, removeBtn);

  row.append(left, right);
  return row;
}

async function render() {
  // 1) Одразу сховати кнопку оформлення
  if (checkoutBtn) checkoutBtn.style.display = "none";
  if (cartSummary) cartSummary.style.display = "none";

  // 2) Беремо кошик
  const cart = getCart();

  // 3) Очищаємо список
  cartList.replaceChildren();

  // 4) Якщо кошик порожній — показуємо повідомлення і виходимо
  if (cart.length === 0) {
    cartList.appendChild(el("p", { text: "Кошик порожній. Додайте щось із каталогу 🙂" }));
    totalPriceEl.textContent = "0 грн";
    if (cartSummary) cartSummary.style.display = "none";
    return;
  }

  // 5) Кошик НЕ порожній — завантажуємо товари
  let products;
  try {
    products = await loadProducts();
  } catch (err) {
    cartList.appendChild(el("p", { text: "Не вдалося завантажити товари. Оновіть сторінку." }));
    totalPriceEl.textContent = "0 грн";
    return;
  }

  // 6) Тепер можна показати кнопку
  if (cartSummary) cartSummary.style.display = "";
  if (checkoutBtn) checkoutBtn.style.display = "";

  // 7) Рендер товарів
  let total = 0;
  const frag = document.createDocumentFragment();

  cart.forEach(item => {
    const p = products.find(x => x.id === item.productId);
    if (!p) return;
    total += p.priceUAH * item.qty;
    frag.appendChild(cartRow(p, item.qty));
  });

  cartList.appendChild(frag);
  totalPriceEl.textContent = formatUAH(total);
}
function updateBackLink() {
  if (!backToCatalog) return;
  const savedHash = localStorage.getItem(LAST_CATALOG_HASH_KEY) || "";
  backToCatalog.setAttribute("href", `./catalog.html${savedHash}`);
}
updateBackLink();
updateCartBadge()
render();
