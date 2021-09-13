/**
 * @Description:
 * @Author: bubao
 * @Date: 2019-08-29 17:09:17
 * @LastEditors: bubao
 * @LastEditTime: 2019-08-29 17:09:38
 */
const fs = require('fs')
const browserify = require('browserify')
const errorify = require('errorify')
const uglifyify = require('uglifyify')

const b = browserify({
  entries: ['./src/index.js'],
  cache: {},
  packageCache: {},
  plugin: [errorify]
})
  .transform('babelify', {
    presets: ['es2015', 'react']
  })
  .transform(
    {
      global: true
    },
    'uglifyify'
  )

b.on('update', bundle)
b.on('log', console.log)
b.on('error', console.error)
bundle()

function bundle() {
  b.bundle().pipe(fs.createWriteStream('./static/js/bundle.js'))
  .on('finish',function(){
    console.log('Build success , exit process');
    process.exit(1)
  });
}
