const path = require("path");
const fromRoot = (p) => path.join(__dirname, p);

module.exports = {
  mode: process.env.NODE_ENV ? "jit" : undefined,
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === "production",
    content: [fromRoot("./app/**/*.+(js|ts|tsx|mdx|md)")],
  },
  darkMode: "media",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
