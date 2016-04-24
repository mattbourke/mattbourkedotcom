SET NODE_ENV=production
browserify -t [ babelify ] src\js\main.js -o dist\bundle.js