/// <reference types="vitest" />
import { defineConfig, withFilter } from 'vite'
import react from '@vitejs/plugin-react-oxc'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
	// this config enables listening to remote connections from machines like my Windows VM
	server: {
		host: "0.0.0.0",
		port: 5173,
		// the prefixes /backend-service and /backup-service are configured in the client-config.json
		// it is prefixed in the client, to be able to do the right proxy mapping here
	},

	plugins: [
		react(),
		// Load the `svgr` plugin only for files which end in `.svg?react`
		withFilter(svgr(), { load: { id: /\.svg\?react$/ } }),
	],

	/* Support for absolute imports with @ prefix */
	resolve: {
		conditions: ["mui-modern", "module", "browser", "development|production"],
		alias: {
			"@components": "/src/components",
		},
	},

	build: {
		target: "esnext",
		chunkSizeWarningLimit: 1000,
		outDir: "./build/vite-build",
	},

	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "src/test/setup.js",
		include: ["src/test/**/*.test.{ts,tsx,js}"],
		exclude: ["**/node_modules/**", "**/build/**"],
	},
})
