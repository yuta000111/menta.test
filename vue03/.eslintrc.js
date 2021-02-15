module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/recommended",
        "prettier-vue",
        "plugin:prettier-vue/recommended",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    plugins: ["vue"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
};