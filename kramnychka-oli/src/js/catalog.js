import { updateCartBadge } from "./badge.js";
import { loadProducts, SECTIONS, CATEGORY_DESCRIPTIONS } from "./data.js";
import { el, formatUAH } from "./dom.js";
import { addToCart } from "./storage.js";
updateCartBadge();

const descEl = document.getElementById("categoryDescription");
const sectionChips = document.getElementById("sectionChips");
const categoryChips = document.getElementById("categoryChips");
const grid = document.getElementById("productsGrid");

let allProducts = [];
let activeSection = "all";
let activeCategory = "all";
const LAST_CATALOG_HASH_KEY = "kramnychka:lastCatalogHash";

/** 1) Зчитуємо hash типу #care / #rest / #outdoor / #garden */
function applyHashFilter() {
  const hash = window.location.hash.replace("#", "").trim();
  if (hash) {
    activeSection = hash;
    activeCategory = "all";
  } else {
    activeSection = "all";
    activeCategory = "all";
      // запам’ятати, щоб потім “Назад до каталогу” в кошику вів у той самий розділ
  const safeHash = hash ? `#${hash}` : "";
  localStorage.setItem(LAST_CATALOG_HASH_KEY, safeHash);
  }
}

function buildChips() {
  // Section chips
  sectionChips.replaceChildren();

  const allBtn = el("button", { className: "chip", text: "Усі розділи" });
  allBtn.addEventListener("click", () => {
    activeSection = "all";
    activeCategory = "all";
    updateChips();
    render();
  });
  sectionChips.appendChild(allBtn);

  SECTIONS.forEach((s) => {
    const btn = el("button", { className: "chip", text: s.title, dataset: { key: s.key } });
    btn.addEventListener("click", () => {
      // якщо клікаємо чіп — теж оновимо hash, щоб URL відповідав фільтру
      window.location.hash = s.key; // це викличе hashchange і перерендер
    });
    sectionChips.appendChild(btn);
  });

  updateCategoryChips();
}

function updateChips() {
  [...sectionChips.querySelectorAll(".chip")].forEach((btn) => btn.classList.remove("is-active"));

  const target =
    activeSection === "all"
      ? sectionChips.querySelector(".chip")
      : sectionChips.querySelector(`.chip[data-key="${activeSection}"]`);

  if (target) target.classList.add("is-active");
  else sectionChips.querySelector(".chip")?.classList.add("is-active");

  updateCategoryChips();
}

function updateCategoryChips() {
  categoryChips.replaceChildren();

  const categories = new Set();
  allProducts.forEach((p) => {
    if (activeSection === "all" || p.section === activeSection) categories.add(p.category);
  });

  const allCat = el("button", { className: "chip", text: "Усі підкатегорії" });
  allCat.addEventListener("click", () => {
    activeCategory = "all";
    updateCategoryActive();
    render();
  });
  categoryChips.appendChild(allCat);

  [...categories].sort().forEach((cat) => {
    const btn = el("button", { className: "chip", text: cat, dataset: { cat } });
    btn.addEventListener("click", () => {
      activeCategory = cat;
      updateCategoryActive();
      render();
    });
    categoryChips.appendChild(btn);
  });

  updateCategoryActive();
}

function updateCategoryActive() {
  [...categoryChips.querySelectorAll(".chip")].forEach((btn) => btn.classList.remove("is-active"));

  const target =
    activeCategory === "all"
      ? categoryChips.querySelector(".chip")
      : categoryChips.querySelector(`.chip[data-cat="${CSS.escape(activeCategory)}"]`);

  if (target) target.classList.add("is-active");
  else categoryChips.querySelector(".chip")?.classList.add("is-active");
}

function productCard(p) {
  const card = el("article", { className: "card" });

  const title = el("h3", { className: "card__title", text: p.name });
  const meta = el("p", {
    className: "card__meta",
    text: `${p.category} • ${SECTIONS.find((s) => s.key === p.section)?.title ?? ""}`,
  });

  const priceRow = el("div", { className: "priceRow" });
  const price = el("strong", { text: `${formatUAH(p.priceUAH)} / ${p.unit}` });
  priceRow.appendChild(price);

  if (p.recommended) {
    const badge = el("span", { className: "badge", text: "Оля рекомендує" });
    priceRow.appendChild(badge);
  }
const btn = el("button", { className: "btn", text: "Додати в кошик" });

btn.addEventListener("click", () => {
  addToCart(p.id, 1);

  // Візуальний фідбек: зміна тексту + стиль
  btn.classList.add("is-added");
  const prevText = btn.textContent;
  btn.textContent = "Додано ✓";

  window.setTimeout(() => {
    btn.classList.remove("is-added");
    btn.textContent = prevText;
  }, 900);
});

  card.appendChild(title);
  card.appendChild(meta);
  card.appendChild(priceRow);
  card.appendChild(btn);

  return card;
}

function updateDescription() {
  if (!descEl) return;

  if (activeCategory !== "all") {
    descEl.textContent = CATEGORY_DESCRIPTIONS?.[activeCategory] ?? "";
    return;
  }

  if (activeSection !== "all") {
    const secTitle = SECTIONS.find((s) => s.key === activeSection)?.title ?? "";
    descEl.textContent = secTitle ? `Розділ: ${secTitle}` : "";
    return;
  }

  descEl.textContent = "Оберіть розділ або підкатегорію, щоб швидше знайти потрібне.";
}

function render() {
  updateDescription();

  const filtered = allProducts.filter((p) => {
    if (activeSection !== "all" && p.section !== activeSection) return false;
    if (activeCategory !== "all" && p.category !== activeCategory) return false;
    return true;
  });

  grid.replaceChildren();

  if (filtered.length === 0) {
    grid.appendChild(el("p", { text: "Немає товарів за цими фільтрами." }));
    return;
  }

  const fragment = document.createDocumentFragment();
  filtered.forEach((p) => fragment.appendChild(productCard(p)));
  grid.appendChild(fragment);
}

(async function init() {
  allProducts = await loadProducts();

  applyHashFilter();
  buildChips();
  updateChips();
  render();
updateCartBadge();

  window.addEventListener("hashchange", () => {
    applyHashFilter();
    updateChips();
    render();
  });
})();
