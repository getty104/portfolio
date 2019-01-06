import { highlight } from "highlight.js";
import { Marked, Renderer } from "marked-ts";

Marked.setOptions({
  renderer: new Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  highlight: (code, lang) => highlight(lang!, code).value
});

export const parseMarkdownText = (text: string) => Marked.parse(text);
