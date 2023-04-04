# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## postgres setup

Open devbox shell

```
devbox shell
```

Setup Postgres in shell & Set Password `postgres`

```
initdb -U postgres -W
```

Set env variables `DATABASE_URL`

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres?schema=public"
```

Start postgres server

```
devbox services start
or
make up
```
