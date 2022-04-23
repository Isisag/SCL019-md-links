const colors = require("colors");
const fs = require("fs");
const { existsSync, readFileSync,readdirSync, readFile, exists } = fs;
const process = require("process");
const { stdin, stdout, exit } = process;
const readline = require("readline");
const path = require("path");
const { isAbsolute, extname, resolve } = path;
const url = require('url')
const https = require('https')
const http = require('http')


const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9!@:%_\+.~#?&\/\/=]*)/g;

function welcomeUser(path) {

    stdout.write(`tu directorio actual es: ${__dirname.cyan} \n`.bold);
    console.log(path)
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



                const linksPromises = mdFile.map(link => {
                  // console.log(typeof(link))
                    return new Promise ((resolve, reject) => {
                      let req;
                      if(link.startsWith('https')){
                        req = https.request(link, (res) => {
                          // console.log( link + '   statusCode:    ', res.statusCode);
                        });
                      }
                      else{
                        req = http.request(link, (res) => {
                          // console.log( link + '   statusCode:    ', res.statusCode);
                        });
                      }
                      req.on('error', (e) => {
                        console.error(e);
                      });
                      resolve(req)
                      reject( error => console.log('peticion erronea'.red + error))
                      req.end();
                      });
                })
                Promise.all(linksPromises)


              //todo estructura que no funciona

              // mdFile.forEach( link => {
              //   return new Promise ((resolve, reject) => {
              //     console.log('aaaa')

              //   const options = {
              //   method:'GET',
              //   pathname: url.parse(link).pathname,
              //   port:443,
              //   hostname:url.parse(link).host,
              //   };

              //   const req = https.request(options, res => {
              //       const newData ={
              //       nameLink: link,
              //       Code: res.statusCode,
              //       status:`ok ${res.statusCode}`
              //       };
              //   resolve(newData);
              //   reject( error => console.log('peticion erronea' + error))

              //   console.log('se llego al final!')
                
              //   });
              // });
              // });


              // const req = https.request(link, (res) => {
              //   console.log( mdFile + '   statusCode:    ', res.statusCode);
              // });
              // req.on('error', (e) => {
              //   console.error(e);
              // });
              // req.end();
      } 
    }
    //acaba el programa!
    interface.close();
  }
    )
  };

module.exports = {
  welcomeUser,
};

// Funcion que obtiene el estatus del Link
// const linkStatus = (link) => {
//   return new Promise((resolve, rejects) => {
//     fetchUrl(link, (error, meta) => {
//       if (meta) {
//         resolve(meta.status);
//       } else {
//         rejects(error)
//       }
//     })
//   })
// }



// const linksStatus = (link) => {
//   return new Promise ((resolve) => {
     
//   const options={
//   method:'GET',
//   pathname: url.parse(link).pathname,
//   port:443,
//   hostname:url.parse(link).host,
     
//   };
     
//   const req = https.request(options, res => {
      
//       const newData ={
//       nameLink:link,
//       Code: res.statusCode,
//       status:`ok ${res.statusCode}`
//       };
     
   
//   resolve(newData);
  
//   });
// });
  
// }




// function validateLink(){ 
//   return new Promise((resolve,reject) => {

//     console.log('resolviendo...')

//      resolve(link)
//     .then( response => {
//      if(response.ok){
//        return response.text() 
//      }
//      reject('no se ha podido acceder !' + response.status)
//      })
//     .then( texto => resolve(texto))
//     .catch( error => console.log(error))
//    })
//  }validateLink()



