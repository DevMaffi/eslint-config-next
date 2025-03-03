/* eslint-disable */

import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginReactRefresh from "eslint-plugin-react-refresh"
import pluginNext from "@next/eslint-plugin-next"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"

/**
 * @type {import("typescript-eslint").ConfigWithExtends}
 */
const config = {
    plugins: {
        "react-hooks": pluginReactHooks,
        "react-refresh": pluginReactRefresh,
        "@next/next": pluginNext,
        "jsx-a11y": pluginJsxA11y,
    },

    rules: {
        // react-hooks
        ...pluginReactHooks.configs.recommended.rules,

        // react-refresh
        "react-refresh/only-export-components": [
            "warn",
            { allowExportNames: ["metadata"] },
        ],

        // @next/next
        ...pluginNext.configs.recommended.rules,
        "@next/next/no-duplicate-head": "off", // ❌ ☑️ ⚠️

        // jsx-a11y
        ...pluginJsxA11y.configs.recommended.rules,
    },
}

export default config
