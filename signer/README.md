# GRVT SIGNER

GRVT types and methods for signing messages.

## Table of Contents

- Main scripts [src/index.ts](src/index.ts)
- EIP712 Types Definition [src/types](src/types/types.ts)

## Dependencies

The script use only [ethers](https://www.npmjs.com/package/ethers) package to sign messages.
You can easy find equivalent libraries for other languages.

- [ethers](https://www.npmjs.com/package/ethers)

## Installing

Using npm:

```bash
npm install grvt-signer
```

Using yarn:

```bash
yarn add grvt-signer
```

Using pnpm:

```bash
pnpm add grvt-signer
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import Signer from 'grvt-signer'
```

You can also use the default export, since the named export is just a re-export from the GRVT factory:

```js
import Signer from 'grvt-signer'
```

If you use `require` for importing:

```js
const Signer =  require('grvt-signer')
```
