export function el(tag, options = {}) {
  const node = document.createElement(tag);

  if (options.className) node.className = options.className;
  if (options.text) node.textContent = options.text;
  if (options.href) node.setAttribute("href", options.href);
  if (options.type) node.setAttribute("type", options.type);
  if (options.value != null) node.value = options.value;
  if (options.dataset) {
    Object.entries(options.dataset).forEach(([k, v]) => node.dataset[k] = String(v));
  }

  return node;
}

export function formatUAH(amount) {
  return new Intl.NumberFormat("uk-UA").format(amount) + " грн";
}
export function pluralizeUA(count, [one, few, many]) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}