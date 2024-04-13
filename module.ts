// import path from 'path'
const path = require('path') // both ok

const filepath = path.join('foo', 'bar', 'img.png')
const filename = path.basename(filepath)
console.log(filename) // img.png
