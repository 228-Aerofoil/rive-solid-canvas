import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import solidPlugin from "vite-plugin-solid";
import pkg from "./package.json";

export default defineConfig({
	plugins: [
		dts({
			tsConfigFilePath: "tsconfig.json",
			outputDir: path.resolve(__dirname, "types"),
		}),
		solidPlugin(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			formats: ["es", "cjs"],
			fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
		},
		rollupOptions: {
			external: [...Object.keys(pkg.dependencies)],
		},
	},
});
