import globals from "globals"
import tseslint from "typescript-eslint"
import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"

import pluginJsConfig from "./plugin-js-config"
import pluginReactConfig from "./plugin-react-config"
import pluginStylisticConfig from "./plugin-stylistic-config"
import miscConfig from "./misc-config"

import pluginNextConfig from "./plugin-next-config"

/**
 * @type {import("typescript-eslint").TSESLint.FlatConfig.Config["files"]}
 */
const files = ["**/*.{js,cjs,mjs,jsx,ts,tsx}"]

/**
 * @type {import("typescript-eslint").InfiniteDepthConfigWithExtends[]}
 */
const combinePluginConfigs = [
    pluginJsConfig,
    pluginReactConfig,
    pluginStylisticConfig,
    miscConfig,
]

/**
 * @type {import("typescript-eslint").InfiniteDepthConfigWithExtends[]}
 */
const combinePluginConfigsWithNext = [
    ...combinePluginConfigs,
    pluginNextConfig,
]

/**
 * @type {import("typescript-eslint").InfiniteDepthConfigWithExtends[]}
 */
const configs = [
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
]

export const reactConfig = tseslint.config(
    ...configs,
    ...combinePluginConfigs.map(config => ({
        files,
        ...config,
    })),
)

export default tseslint.config(
    ...configs,
    ...combinePluginConfigsWithNext.map(config => ({
        files,
        ...config,
    })),
)
