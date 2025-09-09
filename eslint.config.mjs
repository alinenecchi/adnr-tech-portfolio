import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/no-unknown-property": "off",
      "react/jsx-key": "warn",
      "react/no-array-index-key": "warn",
      "react/no-children-prop": "warn",
      "react/no-danger": "warn",
      "react/no-deprecated": "warn",
      "react/no-direct-mutation-state": "warn",
      "react/no-find-dom-node": "warn",
      "react/no-is-mounted": "warn",
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
