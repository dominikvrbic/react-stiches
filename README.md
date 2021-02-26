## yarn start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## yarn build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

## yarn format

Runs prettier on all files in src

## yarn build-external

Creates a build in dist folder that is ready to be used to make a package
To export a component you need to add a export in the index.ts file outside the src folder(please you full import links and not aliases for this)

## Packages that should be installed if needed

1. axios & react-query (api calls)
2. dayjs (dates)
3. react-use (custom hooks)
