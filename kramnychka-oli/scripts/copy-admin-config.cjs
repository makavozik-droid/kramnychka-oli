const fs = require("fs");
const path = require("path");

const from = path.join(process.cwd(), "src", "admin", "config.yml");
const toDir = path.join(process.cwd(), "dist", "admin");
const to = path.join(toDir, "config.yml");

if (!fs.existsSync(from)) {
  console.error("❌ Не знайдено файл:", from);
  process.exit(1);
}

fs.mkdirSync(toDir, { recursive: true });
fs.copyFileSync(from, to);

console.log("✅ Скопійовано:", "src/admin/config.yml → dist/admin/config.yml");
