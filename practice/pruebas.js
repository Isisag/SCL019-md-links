var colors = require('colors');
const { stdout, stdin } = require('process')
console.log('=== PRINCIPIO ===='.cyan)

console.log(' Hola Mundo desde Node ! ');

console.log(process.argv)
let uno = process.argv[1]
console.log(uno)

console.log(__dirname)
console.log(__filename)
// console.log(path.basename(__filename))

//process.stdout
process.stdout.write('Saludos!')
process.stdout.write('dime tu nombre: ')

let nombre;
let preguntas= [
    'Cual es tu nombre?',
    'cuantos años tienes?',
    'Donde vives?'
]
var respuestas = []

function pregunta(i){
    process.stdout.write(preguntas[i])
}

process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim())

    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length)
    }else{
        process.stdout.write('Muchas gracias por tus respuestas')
        process.exit()
    }
   })

   pregunta(0)
   console.log(respuestas)

// process.stdin.on(data, function(data){
//      nombre = process.stdout.write(data.toString())
//      process.stdout.write(`Hola ${nombre} !`)
//      process.exit()
//     })

console.log('=== FINAL ===='.red)


let matematica = {};

function sumar(a,b){
  return console.log(`la suma de ${a} + ${b} es: `, a+b )
}

function restar(a,b){
    return console.log(a-b)
}


// le agregamos una propiedad al modulo *matematica | Este modulo puede contener multiples valores
matematica.sumar = sumar;

// exportamos una unica funcion o variable
// exports.restar = restar;

module.exports = {
    matematica,
    restar
}