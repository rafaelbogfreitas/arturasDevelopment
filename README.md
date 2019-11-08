# Artura Grimalis Photography portfolio
---
## Info:

- ### About this project:

  The concept behind this project was to build a minimalistic website, with no info about the artist apart from his initials. The client wanted his photos to be displayed in an unstructured way and whenever one of them was clicked, to display a carousel of all the pictures on the page.

  A contact form was added to help people get in touch if interested in the work.

- ### Technologies:

  - HTML5
  - SASS
  - JavaScript
  - JQuery
  - Mustache
  - Browserify
  - Common.js

- ### Address
 The website is hosted on [Netlify](https://www.netlify.com) on this address: <https://www.arturasgrimalis.com>

---

## Using the files:

- ### Browserify:
  Open the terminal and run this command:

      npm run watchify

 to start watching the script files in ./components/scripts and automatically get browserify to compile all the files into one bundle.js.

- ### Compiling .SCSS files:

  In the command line, navigate to the project folder and run:

      gulp watch

  The watch function will keep track of ./components/sass folder and any changes on the .scss files will be automatically compiled into .css and piped to ./development/styles/ folder.

- ### Minifying all files and images:

  Once again in the root of the projects folder, run this command on the terminal:

      gulp

  the default gulp function will run the following:

    - gulp-minify-HTML
    - gulp-css-nano
    - gulp-uglify-es
    - gulp-json-minify
    - imagemin

  All the output will be piped to the relevant folders inside ./dist.

---
 
