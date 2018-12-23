import { Marked, Renderer } from "marked-ts";

Marked.setOptions({
  renderer: new Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true
});

export const getParsedMarkdownText = (text: string) => Marked.parse(text);
