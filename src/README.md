Files in this directory reflect rule categories from the [official documentation](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md) cached at `cache/rules.md`.

Except `overrides.ts`. It enables/disables some ESLint rules that are already handled by TypeScript. See [`eslint-recommended` config documentation](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs#eslint-recommended) for more details.

Search/replace regexp: `^@typescript-eslint/([a-z-]+)\t(.+?)\t.*`

Replace string: `\t\t\/\/ \2\n\t\t"@typescript-eslint\/\1": "off",\n`

Replace string for extension rules: `\t\t\/\/ \2\n\t\t"\1": "off",\n\t\t"@typescript-eslint\/\1": "off",\n`
