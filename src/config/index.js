import globals from "globals"
import tseslint from "typescript-eslint"
import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"

import pluginJsConfig from "./plugins/plugin-js-config"
import pluginReactConfig from "./plugins/plugin-react-config"
import pluginStylisticConfig from "./plugins/plugin-stylistic-config"
import miscConfig from "./plugins/misc-config"

/**
 * @type {import("typescript-eslint").InfiniteDepthConfigWithExtends[]}
 */
const combinePluginConfigs = [
    pluginJsConfig,
    pluginReactConfig,
    pluginStylisticConfig,
    miscConfig,
]

export default tseslint.config(
    pluginJs.configs.recommended,
    tseslint.configs.recommended,
    {
        ignores: [
            "node_modules",
            "coverage",
            ".next",
            "build",
            "dist",
        ],
    },
    {
        languageOptions: {
            parserOptions: pluginReact.configs.recommended.parserOptions,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2022,
            },
        },
    },
    ...combinePluginConfigs.map(config => ({
        files: ["**/*.{js,cjs,mjs,jsx,ts,tsx}"],
        ...config,
    })),
)
