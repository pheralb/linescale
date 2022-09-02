<div align="center">
  <h2>linescale</h2>
  <p>🎉 The web-based text editor for everyone. Inspired by <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> & <a href="https://github.com/catppuccin/catppuccin" target="_blank">Catppuccin Theme</a>.</p>

![GitHub releases](https://img.shields.io/github/release/pheralb/linescale)
![GitHub stars](https://img.shields.io/github/stars/pheralb/linescale)
![GitHub issues](https://img.shields.io/github/issues/pheralb/linescale)
![GitHub license](https://img.shields.io/github/license/pheralb/linescale)
[![Required Node.JS 16+](https://img.shields.io/static/v1?label=node&message=16&nbsp;required%20&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

</div>

## ⚒ Contribute

> 🚧 You will need:
> - [Nodejs +16 (LTS recommended)](https://nodejs.org/en/).
> - [Git](https://git-scm.com/).
> - You can use [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/es/) or [yarn](https://yarnpkg.com/).
> - [Planetscale CLI](https://planetscale.com/features/cli) - Download for [Windows](https://github.com/planetscale/cli#windows) / [MacOS](https://github.com/planetscale/cli#macos) / [Linux](https://github.com/planetscale/cli#linux).
> - [Github OAuth ID & Secret](https://github.com/settings/applications/new).

1. Fork the project & clone it:

- [Click here to fork](https://github.com/pheralb/linescale/fork).

and clone:

```bash
git clone git@github.com:YOUR_NAME/linescale.git
```

2. Create a new Planetscale database:

- 2a. [Create a new Planetscale database](https://planetscale.com/docs/tutorials/planetscale-quick-start-guide#getting-started-planet-scale-dashboard).
- 2b. [Create a development branch from your database (optional but recommended)](https://planetscale.com/docs/concepts/branching#create-a-development-branch).
- 2c. Go to the development (or main if you didn't create it) branch -> click on **connect** -> select **Prisma** & copy the .env variable ([example - connection string](https://planetscale.com/docs/tutorials/connect-nextjs-app#generate-a-connection-string)).

3. Create a new Github OAuth App:

- 3a. [Create a new Github OAuth App](https://github.com/settings/applications/new). Generate a new client secret.
- 3b. In the **"Authorization callback URL"** write:

```txt
http://localhost:3001/api/auth/callback/github
```

4. Create a .env file in the root of the project:

```bash
# Planescale connection url =>
DATABASE_URL=

# Next Auth =>
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Github credentials =>
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

5. Push your tables to the database ([following the schema](https://github.com/pheralb/linescale/blob/main/prisma/schema.prisma)):

```bash
npx prisma db push
```

and check the tables in the database:

```bash
npx prisma studio
```

6. Install the dependencies:

```bash
npm install
#or
pnpm install
#or
yarn install
```

7. Run the project:

```bash
npm run dev
#or
pnpm dev
#or
yarn dev
```

and ready 🥳🥳, open [http://localhost:3001](http://localhost:3000) with your browser to see the result. Now you can contribute to the project and create pull requests.

## 📦 Packages

> ⭐ Using Create T3 App CLI: [Website](https://create.t3.gg/) - [Github](https://github.com/t3-oss/create-t3-app).

- ⚡️ [Next.js](https://nextjs.org/) - The React Framework.
- 🚀 [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM.
- 🔑 [Next Auth](https://next-auth.js.org/) - Authentication for Next.js.
- ⬇️ [Next PWA](https://github.com/shadowwalker/next-pwa) - Zero config PWA plugin for Next.js, with workbox.
- 🔎 [Next SEO](https://github.com/shadowwalker/next-pwa) - Manage your SEO in Next.js.
- ✍️ [Monaco-Editor](https://microsoft.github.io/monaco-editor/) - A browser based code editor.
- 💅 [Chakra UI & Emotion](https://chakra-ui.com/) - Simple, Modular & Accessible UI Components for your React Applications.
- 💙 [Typescript](https://www.typescriptlang.org/) - A superset of JavaScript.
- 🔷 [Zod](https://zod.dev/) - TypeScript-first schema validation with static type inference.

## 📝 License

- [MIT License](https://github.com/pheralb/linescale/blob/main/LICENSE).