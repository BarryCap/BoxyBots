# Installation

You will need to install git ([git-scm.org]), node ([nodejs.org]).

Install pnpm:

```sh
npm install -g pnpm
```

Restart your terminal and run:

```sh
pnpm install
pnpm start
```

# Development

The main code is found in `src/components/`. The styling is in `src/main.css`.


Other folders and files:

- `old/` contains historic code with vanilla js
- `public/` contains static assets (images, etc.) imported in index.html
- `src/` contains the source code (in vue)
  - `main.js` is the entrypoint for vue
  - `App.vue` is the main layout
- `index.html` is the html file where the application will be injected into
- `package.json` contains meta info about the project
- `vite.config.js` is the config for vite (used to deploy and build)
