# Atrium

### Installation

```sh
git clone git@github.com:AvengersLab/atrium.git
cd c
npm install
npm run validate # The installation was successful if no error occurs after running 'validate'.
npm run dev
```

### Commands

```sh
yarn dev       # start development server
yarn validate  # run test,lint,build,typecheck concurrently
yarn test      # run jest
yarn lint      # run eslint
yarn lint:fix  # run eslint with --fix option
yarn typecheck # run TypeScript compiler check
yarn build     # build production bundle to 'dist' directly
yarn prettier  # run prettier for json|yml|css|md|mdx files
yarn clean     # remove 'node_modules' 'package-lock.json' 'dist' completely
yarn serve     # launch server for production bundle in local
```

### Environment Variable

- `VITE_CONTRACT_ID`: NEAR Wallet ID
- `VITE_GAME_API_URL`: `ws://192.168.1.108:2567`
