# Erik's Figma Hellow World

Remaking the basic "Hello world" rectangle generator project for Figma.

## Quick Start

I used bun, but I feel like most people don't so here is the standard npm install:

1. Clone the repo
1. Run `npm install` to install all of the dependencies and libraries.
1. Start the project:
    - Run `npm run dev` to start webpack in watch mode.
    - Run `npm run start` to start webpack in production build.
1. Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from this repo.

## Quick Tour

A quick run down of where what is in my repo.

`app/components/`  — all of the UI is in here.
`app/styles/` — global style sheet, Tailwind entry point is here.
`app/util` — where I keep my neat functions.
`plugin/` — where all of the Figma "receiver" communication goes; see [how Figma ui works](https://www.figma.com/plugin-docs/api/figma-ui/).
