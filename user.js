const colors = require("colors");
const fs = require("fs");
const { readdir, readFile, existsSync } = fs;
const process = require("process");
const { stdin, stdout, exit } = process;
const readline = require("readline");
const path = require("path");
const { isAbsolute, join, extname, dirname, basename } = path;

function welcomeUser() {
  // console.clear()
  console.log("====================".blue);
  console.log(" WELCOME TO MD LINKS ".green);
  console.log("====================".blue);
  stdout.write(`tu directorio actual es: ${__dirname} \n`.bold);

  function handlePath() {
    let interface = readline.createInterface(stdin, stdout);

    interface.question("Inserta una ruta absoluta para evaluar \n ".bgBlue,function (respuesta) {
        // evaluamos si la ruta existe o no
        //exitsSync evalua tanto absoluto como realtivo 
        if (!existsSync(respuesta)) {
            stdout.write('No es una ruta válida')
            exit()
        } 

        if(!isAbsolute(respuesta) === true){
            console.log('esta no es una ruta absoluta')
            respuesta = `${__dirname}\\${respuesta}`
            // stdout.write('No es una ruta válida, debe ser absoluta')
            // exit()
        }else{
            console.log('la ruta si era abs')
        }

        console.log("=>".green + " " + respuesta);

        let file;
        
        if(respuesta.includes('.md')){
            readFile(respuesta, "utf-8", (data, error) => {
                if (error) {
                  console.log(error);
                } else {
                  stdout.write(data);
                }
              });
        }else{

        readdir(respuesta, (error, archvivos) => {
          error = new Error();
            console.log(typeof(archvivos))
          archvivos.forEach((archivo) => {
            console.log("archivos => " + archivo);

            if (extname(archivo) === ".md") {
              file = archivo;
              stdout.write("=>" + file.bgYellow + "\n");
            }
          });

          console.log(file.green);

          readFile(file, "utf-8", (data, error) => {
            if (error) {
              console.log(error);
            } else {
              stdout.write("leyendo...".blue + data + "\n");
            }
          });
        });

    }




        interface.close();
      }
    );
  }
  handlePath();
}

module.exports = {
  welcomeUser,
};

// rl code
// let read=readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// call readline
// var readline = require('readline');

// var rl = readline.createInterface(process.stdin, process.stdout);
// rl.question("How do you feel today? ", function(answer) {
// // ask a question to interact with user.

// console.log("Have a great day!");

// // close the program
// rl.close();
// });

// interface.on("line", function (input) {
//   console.log(input + "prueba");
//   const ruta = input;
// });
