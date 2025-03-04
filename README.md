# @devmaff1/eslint-config-next

Reusable ESLint configuration for Next.js projects.

> [!NOTE]
> This package also provides a standalone React ESLint configuration for projects that don't use Next.js, ensuring consistent linting standards across both your plain React and Next.js projects.

## Installation

```bash
npm install --save-dev --save-exact @devmaff1/eslint-config-next eslint
```

```bash
yarn add --dev --exact @devmaff1/eslint-config-next eslint
```

```bash
pnpm add --save-dev --save-exact @devmaff1/eslint-config-next eslint
```

> [!IMPORTANT]
> For ESLint highlighting and code analysis within your editor, such as VS Code, you'll need to install `eslint@9.0.0` or higher as a `devDependency` in your project (👇[watch peer dependencies section](#peer-dependencies)👇).
>
> _For VS Code users:_ Ensure you have the ESLint extension installed and that your VS Code settings are configured to enable ESLint's flat config support. This typically involves setting `"eslint.useFlatConfig": true` in your VS Code `settings.json` file.

## Peer Dependencies

This package relies on the following peer dependencies. Please ensure they are installed in your project:

- `eslint`: `9.x` - _(Optional)_ Required in cases you need ESLint highlighting and code analysis within your editor.
- `next`: `14.2.24` - _(Optional)_ Required for Next.js projects only.
- `react`: `18.x`
- `typescript`: `5.7.x` - _(Optional)_ Required for TypeScript projects only.

## Usage

### Basic Usage

For Next.js projects, simply use the _default_ export of this package in your `eslint.config.js` file:

```js
export { default } from "@devmaff1/eslint-config-next"
```

#### Plain React Projects (non-Next.js)

For standard React projects without Next.js, export the `reactConfig` _as default_ in your `eslint.config.js` file:

```js
export { reactConfig as default } from "@devmaff1/eslint-config-next"
```

This ensures that your plain React projects use the same consistent React linting rules as your Next.js projects.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an [issue](https://github.com/DevMaffi/eslint-config-next/issues).

## Links

- [npm](https://www.npmjs.com/package/@devmaff1/eslint-config-next)
- [github](https://github.com/DevMaffi/eslint-config-next)
