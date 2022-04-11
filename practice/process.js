const fs = require('fs');
const { readFile , unlink, readlink } = fs

const colors = require('colors');
const path = require('path')

const rutaAbs = process.argv[1]
const rutaRel = process.argv[0]
console.log(process.argv0)  // * argv0 === argv[0]

console.log(process.arch)
process.memoryUsage
console.log(process.features)


console.log(process.argv)
console.log(rutaAbs.bgMagenta)
console.log(rutaRel.bgMagenta)

/* output 
process.argv [
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\isisd\\3D Objects\\Laboratoria\\Proyecto 4\\SCL019-md-links\\process'
]

processargv 1     C:\Users\isisd\3D Objects\Laboratoria\Proyecto 4\SCL019-md-links\process
processargv 0     C:\Program Files\nodejs\node.exe

*/

const { argv } = require('process');

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

