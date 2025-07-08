import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import reactRefreshPlugin from "eslint-plugin-react-refresh"

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    args: "all",
                    argsIgnorePattern: "^_",
                    caughtErrors: "all",
                    caughtErrorsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],
            "@html-eslint/no-inline-styles": "off",
        },

        settings: {
            react: {
                version: "detect",
            },
        },
    },

    // Validate that all components can safely be updated with fast refresh (hot-reload).
    // docs: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
    {
        plugins: {
            "react-refresh": reactRefreshPlugin,
        },
        rules: {
            "react-refresh/only-export-components": "warn",
        },
        settings: {
            react: {
                version: "detect", // Automatically detect React version
            },
        },
    },
]
