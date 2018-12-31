const executeExternalLink = (src: string) => {
  const script = document.createElement("script");
  script.src = src;
  document.head!.appendChild(script);
};

export const executeScriptTagsById = (id: string) => {
  const element = document.getElementById(id);
  element &&
    Array.prototype.forEach.call(
      element.getElementsByTagName("script"),
      (scriptTag: { src: string }) => executeExternalLink(scriptTag.src)
    );
};
