import { FlatCompat } from "@eslint/eslintrc";
const c = new FlatCompat({ baseDirectory: import.meta.dirname });
export default [...c.extends("next/core-web-vitals", "next/typescript")];
