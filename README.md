<h1 align='center'>
<samp>esrun</samp>
</h1>

<p align='center'>
  <samp>Node.js runtime enhanced with esbuild for loading TypeScript & ESM</samp>
<br>
<br>
<a href='https://www.npmjs.com/package/esrun'>
<img src='https://img.shields.io/npm/v/esrun?color=333&labelColor=555&style=flat-square' alt='version'/>
</a>
</p>

From v0.15, `esrun` is essentially an alias of [`tsx`](https://github.com/esbuild-kit/tsx), with automated CJS/ESM mode and caching.

> Issues are disabled in this repo, they should be report in [esbuild-kit/tsx](https://github.com/esbuild-kit/tsx) instead.

## Usage

```bash
npx esrun hello.ts
```

#### Install globally

```bash
npm i -g esrun

esrun index.ts
```

#### Install as dependency

```bash
npm i esrun
```

```json
{
  "scripts": {
    "start": "esrun index.ts"
  },
  "dependencies": {
    "esrun": "*"
  }
}
```

Learn more at [`tsx`](https://github.com/esbuild-kit/tsx).
