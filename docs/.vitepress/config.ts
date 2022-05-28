import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Eifueo",
  description: "Rewritten notes!",
  lang: "en-US",
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: "HL Chemistry 2", link: "/sch4uz.html" }],
    sidebar: getSidebar(),
    repo: "https://git.eggworld.tk/eggy/eifueo",
    docsDir: "docs",
  },
  markdown: {
    config: (md) => {
      md.use(require("markdown-it-mathjax3"), {
        loader: { load: ["[tex]/mhchem"] },
        tex: { packages: { "[+]": ["mhchem"] } },
      });
    },
  },
});

function getSidebar() {
  return [
    {
      text: "Grade 12 IB",
      children: [{ text: "HL Chemistry 3", link: "/g12/snc4mz" }],
    },
  ];
}
