const colors = require("colors");
const fs = require("fs");
const { existsSync, readFileSync } = fs;
const process = require("process");
const { stdin, stdout, exit } = process;
const readline = require("readline");
const path = require("path");
const { isAbsolute, extname, resolve } = path;

const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g;

function welcomeUser(answer) {
  
  function welcome() {
    console.log("===================================".blue.bgBlack);
    console.log(`      WELCOME TO IA-MD-LINKS       `.white.bgGreen);
    console.log("===================================".blue.bgBlack);
    stdout.write(`tu directorio actual es: ${__dirname.cyan} \n`.bold);
  }
  welcome();
  
  let interface = readline.createInterface(stdin, stdout);
  interface.question(
    "Ingresa la ruta para evaluar => ".blue.bold,
    function (answer) {
    
      // evaluamos si la ruta existe o no // exitsSync evalua tanto absoluto como realtivo
      if (!existsSync(answer)) {
        stdout.write("No es una ruta válida".red);
        exit();
      }
      if (!isAbsolute(answer) === true) {
        answer = resolve(answer) // resuelve el path abs de cualquier archivo
      } else {
        console.log("la ruta si era abs, continue joven");
      }
      // si la respuesta incluye un .md lee el archivo directamente
      if (answer.includes(".md")) {
          let mdFile = readFileSync(answer, "utf8");
              if(!mdFile.includes('https','http')) 
              console.log('este archivo no contiene links'.red)
              else{
              console.log(mdFile = mdFile.match(regex) ); // array con links
              console.log(mdFile.length)  // cuantos links hay
            }
      } else {
        // si es un directorio leelo y saca los archivos que contengan una extension .md
        let directory = fs.readdirSync(answer)

        directory.forEach( archivo => {
          if(extname(archivo) === ".md"){
            console.log('leyendo...' + archivo.blue.bold)
              let file = readFileSync(archivo, "utf-8")

              if(!file.includes('https','http'))
              console.log('este archivo no contiene links'.red)
              else {
              file = file.match(regex) 
              console.log(file);  // array con links
              console.log(file.length)  // cuantos links hay
            }
          }
        })
      }
      //acaba el programa!
      interface.close();
    }
  );
}

module.exports = {
  welcomeUser,
};

