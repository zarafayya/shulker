const path = "./dist/index.d.ts";
const text = `/// <reference types="../components.d.ts" />
${await Bun.file(path).text()}`;
await Bun.write(path, text);
