# Dapp作成手順
---
## 出来上がるもの
- ボタンを押すとmetamaskに接続できるシステム

## インストール/コマンド関連

```
# npmが入っている前提
npx create-react-app アプリ名 --template typescript
cd アプリ名
npm install -g yarn
npm i -D webpack webpack-cli typescript ts-loader
npm i -S react react-dom @types/react @types/react-dom
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion @usedapp/core
yarn add @metamask/jazzicon
yarn add @chakra-ui/icons
yarn add @fontsource/inter
```

## アプリ起動関連
```
# アプリ配下で行う
npm run
npm start
```

## 参考サイト
```
# Dapp作成手順
https://dev.to/jacobedawson/build-a-web3-dapp-in-react-login-with-metamask-4chp

#typescriptとwebpack関連
https://ics.media/entry/16329/#webpack-ts-react

※上記サイトの「webpack+TypeScript+Reactの最小構成」参照

# useEtherBalance関連
https://usedapp-docs.netlify.app/docs/getting%20started/reading/

# Chakra UI関連
https://fwywd.com/tech/next-chakra-ui
https://chakra-ui.com/docs/styled-system/theme#breakpoints

# @fontsource/inter公式サイト
https://yarnpkg.com/package/@fontsource/inter

```