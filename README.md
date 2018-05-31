# Webpack Boilerplate

This is a basic and easy to use boilerplate for web projects using React (with Typescript) and CSS-Modules. 


To start the webpack-dev-server simply run `yarn start`

Build the project production-ready with `yarn build`


## Typescript

It's recommended to use Typescript. Typescript is compiled with `ts-loader`. 

TSlint is extends the standard config.


## Styling

CSS-Modules with Sass are used. Scss files can be imported into script files. Sass files go into the `src/styles` folder and can be accessed by absolute path

`import styles from 'styles/main.scss'`

## Testing

Testing is done with `jest` and `jest-enzyme`. Tests go into the `tests` folder.

## Assets

Assets should go into the `src/assets` folder and can also be accessed by an absolute path like scss files.

There are no typings for assets so far.

Svgs are imported with the [react-svg-loader](https://github.com/boopathi/react-svg-loader)
Other assets can be imported with the [url-loader](https://github.com/webpack-contrib/url-loader)


