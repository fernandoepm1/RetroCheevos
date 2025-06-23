# RetroCheevos
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)

## Description
This repo is for tracking the progress I make developing achievements for the [RetroAchievements](https://retroachievements.org/) platform

## Build

You'll need to have Node.js installed to be able to build the project and run the commands.

Install dependencies:
```shell
npm install
```

Build the project:
```shell
npm run build
```

## Usage

You'll need to create a `.env` file in the location that you will run the commands and set the location of the RACache folder for the emulator you are using.
```js
// .env file
RACACHE=/path/to/racache/folder
```

Check for changes against RACache:
```shell
npm run diff
```

Save changes made in RACache:
```shell
npm run save
```

Check [@cruncheevos/cli](https://github.com/suXinjke/cruncheevos/tree/master/packages/cli) for the complete usage docs.
