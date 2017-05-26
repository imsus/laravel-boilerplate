const { mix } = require('laravel-mix')
const path = require('path')
const WorkboxPlugin = require('workbox-webpack-plugin')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .stylus('resources/assets/stylus/app.styl', 'public/css')
   .extract([
     'vue', 'axios'
   ])
   .webpackConfig({
     plugins: [
       new WorkboxPlugin({
         globDirectory: './',
         staticFileGlobs: ['public/**/*.{css,js}'],
         swDest: path.join('./public/', 'sw.js')
       })
     ]
   })
   .disableNotifications()
   .browserSync({
     proxy: 'http://present.kawaiibeautyjapan.dev',
     files: [
       'resources/views/**/*.blade.php',
       'resources/assets/**/*.{css,js,vue}'
     ],
     notify: false
   })
