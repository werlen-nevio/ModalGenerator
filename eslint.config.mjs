import globals from "globals";
import pluginJs from "@eslint/js";
import jqueryPlugin from "eslint-plugin-jquery";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        $: "readonly",
        jQuery: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      jquery: jqueryPlugin,
    },
  },
];
