# Engineers-WEB
[丑之日プロジェクト](https://ushinohi.com)のWEBページです。  

このプロジェクトは[Vite](https://vite.dev/)を使用してビルドします。  
[![Netlify Status](https://api.netlify.com/api/v1/badges/2cbdf965-c088-4aea-ae42-1bf5dc52f282/deploy-status)](https://app.netlify.com/sites/goofy-kepler-e1a30e/deploys)

[English](README_en.md)

## 動作環境

Node.js のバージョンは [.nvmrc](.nvmrc) を参照してください（`nvm use` で切り替えられます）。

## 使用可能なスクリプト

プロジェクト直下のディレクトリで以下のコマンドが実行できます。:

### `npm start`

開発サーバーを起動します。<br />
[http://localhost:3000](http://localhost:3000)にアクセスすることでアプリを確認できます。

ソースコードの変更を保存すると自動でページに反映されます。

### `npm test`

[Vitest](https://vitest.dev/)でテストを watch モードで実行します。<br />
1回だけ実行する場合は `npm test -- --run` を使用してください。

### `npm run build`

本番環境のアプリを `build` ディレクトリ下にビルドします。  
ビルドは縮小され、ファイル名にはハッシュが含まれます。  
これでアプリをデプロイする準備は完了です。  

### `npm run preview`

`npm run build` で生成した `build` ディレクトリをローカルで配信し、本番ビルドの動作を確認できます。

## さらに学習する

[Vite のドキュメント](https://vite.dev/guide/)でさらに詳しく学習できます。

Reactを学習したい場合は、[React documentation](https://react.dev/)を確認してください。
