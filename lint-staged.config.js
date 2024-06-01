/** @type {import("lint-staged").Config} */
const config = {
  "**/*.{js,json,jsx,ts,tsx,yaml}": [
    "pnpm run prettier:write",
    "pnpm run eslint",
  ],
};

export default config;
