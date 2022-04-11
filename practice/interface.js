const fs = require('fs');
const { readFile , unlink, readlink } = fs

const colors = require('colors');
const path = require('path');
const process = require('process');
const {stdin, stdout, exit} = process;


module.exports = () => {
  // ...
};

const util = require('util')
const readline = require('readline')
var rl = readline.createInterface(stdin, stdout); //*profundizar sobre createInterface

let persona = {
  nombre: '',
  comentarios: [],
  direccion: '',
}

rl.question('donde vives?', (respuesta) => {
  persona.direccion = respuesta
  console.log(`${respuesta} es un bonito lugar`);

  rl.setPrompt('Comentame algo') // se setea el prompt pero no se ejecuta aun
  rl.prompt(); //solo aca se ejecuta

})

rl.on('line', (input) => {
  if(input.trim() === 'salir'){
   let mensaje = util.format('vives en %s y me dijiste %j', persona.direccion, persona.comentarios) //* buscar util.format
  console.log(mensaje)
  exit()
  }

  persona.comentarios.push(input.trim())

  rl.setPrompt('Comentame algo') 
  rl.prompt(); 
})





// process.stdout.write('Inserta una ruta !')
// const userPath = process.stdin()
// if(userPath){
//   console.log(userPath);
//   process.exit()
// }else{
//   console.log('error')
//   process.exit()
// }