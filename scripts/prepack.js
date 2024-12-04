const path = "./dist/index.d.ts";
const files = [];
for (const filepath of new Bun.Glob("./types/**/*.d.ts").scanSync()) {
  files.push(filepath.replace(/\\/g, "/"));
}
const text = `${files.map((file) => `/// <reference types=".${file}" />`).join("\n")}\n
${await Bun.file(path).text()}`;
await Bun.write(path, text);
