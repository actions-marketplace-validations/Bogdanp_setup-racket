import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/setup-racket.ts",
  output: {
    file: "lib/setup-racket.js",
    format: "cjs",
  },
  plugins: [resolve(), commonjs(), typescript()],
};
