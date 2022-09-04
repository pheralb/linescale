import { nanoid } from "nanoid";

export const files = [
  {
    id: nanoid(),
    name: "index.html",
    language: "html",
    value: "<h1>Hello World!</h1>",
  },
  {
    id: nanoid(),
    name: "style.css",
    language: "css",
    value: "body { background-color: #000; }",
  },
  {
    id: nanoid(),
    name: "script.js",
    language: "javascript",
    value: "console.log('Hello World!');",
  },
];
