const fs = require('fs');
const { readFile , unlink, readlink } = fs

const colors = require('colors');
const path = require('path')


module.exports = () => {
  // ...
};


// * LEER EL CONTENIDO DE UN ARCHIVO
readFile('test.md', 'utf-8', ((data, error) => {
  if(error){ console.log(error) }
  else{
      console.log(data)
  }
}))

// * EVAULUAR LA EXTENSION DE UN ARCHIVO
let pathMd = path.extname('test.md')
console.log(` La extension del archivo es: ${pathMd}`)

// * CONDICIONAL QUE EVALUA QUE DOS UN ARCHIVO COINCIDA CON LA EXTENSION .md
let evaluateExtension = path.extname('thumb.png')
if( evaluateExtension === '.md'){
  console.log('las extensiones son iguales'.green)
}else{
  console.log('las extensiones no son iguales'.red)
  console.log('la extension es: ' + evaluateExtension)
}

// * BUCLE QUE LEE UN DIRECTORIO Y MUESTRA EN CONSOLA ARCHIVOS que hay
fs.readdir('./', (error, archvivos) => {
  archvivos.forEach((archivo) => {
    console.log(archivo)
  })
})


console.log('FIN EJECUCION'.rainbow)
