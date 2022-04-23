const colors = require("colors");
const fs = require("fs");
const { existsSync, readFileSync,readdirSync, readFile } = fs;
const process = require("process");
const { stdin, stdout, exit } = process;
const readline = require("readline");
const path = require("path");
const { isAbsolute, extname, resolve } = path;


const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9!@:%_\+.~#?&\/\/=]*)/g;

function welcomeUser(path) {

    stdout.write(`tu directorio actual es: ${__dirname.cyan} \n`.bold);
  
  let interface = readline.createInterface(stdin, stdout);
  interface.question("Ingresa la ruta para evaluar => ".blue.bold, function (path) {
      // evaluamos si la ruta existe o no // exitsSync evalua tanto absoluto como realtivo
        if (!existsSync(path)) {
          stdout.write("No es una ruta válida".red);
          exit();
        }
        if (!isAbsolute(path) === true) {
          path = resolve(path) // resuelve el path abs de cualquier archivo
        } else {
          console.log("la ruta si era abs, continue joven");
        }
      // si la respuesta incluye un .md lee el archivo directamente
      if (path.includes(".md")) {
          let mdFile = readFileSync(path, "utf8")

              if(!mdFile.includes('https','http')) 
              console.log('este archivo no contiene links'.red)
              else{
              mdFile = mdFile.match(regex)
              console.log( mdFile ); // array con links
              console.log(mdFile.length)  // cuantos links hay

              mdFile.forEach( link => {
                
                 return new Promise((resolve,reject) => {

                   console.log('resolviendo...')
                   .then( response => {
                    if(response.ok){
                      console.log(response.status)
                      return console.log(response.text() )
                    }
                    reject('no se ha podido acceder !' + response.status)
                    })
                   .then( texto => resolve(texto))
                   .catch( error => console.log(error))
                  })
                  

                })
                  
          

              

                // mdFile.forEach(link => {
                //   const req = https.request(link, (res) => {
                //     console.log( mdFile + '   statusCode:    ', res.statusCode);
                //   });
                //   req.on('error', (e) => {
                //     console.error(e);
                //   });
                //   req.end();

                // });

      } 

      //acaba el programa!
      interface.close();
    }
  });
}

module.exports = {
  welcomeUser,
};