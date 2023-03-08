# Standings `Front-end`

## Quickstart

```sh
docker-compose up
```

## Connection to container

```
docker-compose exec client sh
```

## Tips for easy development

1. Install the `ESLint` extension and use `npm run eslint` command to check your code style matches

2. Use aliases, they shorten the path to the desired component or file. You can see how they work, as well as add new ones in `tsconfig.json` and `vite.config.ts`

3. Install the `Stylelint` extension and use `npm run stylelint` command to fix css code

## Project structure

The top level directory structure will be as follows:

```
* assets — global styles
* components — global shared/reusable components, such as layout, blocks, ui
* hooks — global hooks such as useActions, useOutside and other
* shared — global shared/reusable regex, types or interfaces, temp data
* utils — utilities, helpers, converters, constants, and the like
```
