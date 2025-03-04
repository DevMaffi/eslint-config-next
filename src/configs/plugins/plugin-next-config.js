/* eslint-disable */

import pluginNext from "@next/eslint-plugin-next"

/**
 * @type {import("typescript-eslint").ConfigWithExtends}
 */
const config = {
    plugins: {
        "@next/next": pluginNext,
    },

    rules: {
        // @next/next
        ...pluginNext.configs.recommended.rules,
        "@next/next/no-duplicate-head": "off", // ❌ ☑️ ⚠️
    },
}

export default config
