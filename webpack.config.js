module.exports = {
   entry: "./app/assets/scripts/App.js",
   output: {
      path: (__dirname + './app/temp/scripts'),
      filename: "App.js"
   }
}

/* https://webpack.js.org/configuration/output/#output-path */
/*   entry: "./app/assets/scripts/App.js", */
/*      path: "./app/temp/scripts", */
/* entry: path.resolve(__dirname, '.app/assets/scripts/App.js'), */
