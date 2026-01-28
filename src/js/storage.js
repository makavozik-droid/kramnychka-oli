const CART_KEY = "kramnychka:cart";

export function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const cart = raw ? JSON.parse(raw) : [];
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(productId, qty = 1) {
  const safeQty = Math.max(1, Number(qty) || 1);

  const cart = getCart();
  const existing = cart.find((x) => x.productId === productId);

  if (existing) {
    existing.qty = Math.max(1, (Number(existing.qty) || 0) + safeQty);
  } else {
    cart.push({ productId, qty: safeQty });
  }

  saveCart(cart);
}

export function updateQty(productId, qty) {
  const safeQty = Math.max(1, Number(qty) || 1);

  const cart = getCart();
  const item = cart.find((x) => x.productId === productId);
  if (!item) return;

  item.qty = safeQty;
  saveCart(cart);
}

export function removeFromCart(productId) {
  const cart = getCart().filter((x) => x.productId !== productId);
  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}
