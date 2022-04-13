const colors = require("colors");
const fs = require("fs");
const { readdir, readFile, existsSync } = fs;
const process = require("process");
const { stdin, stdout, exit } = process;
const readline = require("readline");
const path = require("path");
const { type } = require("os");
const { isAbsolute, join, extname, dirname, basename } = path;

function welcomeUser(answer) {
    let interface = readline.createInterface(stdin, stdout);

  function welcome(){
    console.log("====================".blue);
    console.log(" WELCOME TO MD LINKS ".green);
    console.log("====================".blue);
    stdout.write(`tu directorio actual es: ${__dirname} \n`.bold);
  }welcome()
  
  interface.question("Inserta una ruta absoluta para evaluar  ".bgBlue,function (answer) {
        let file;
        // evaluamos si la ruta existe o no
        // exitsSync evalua tanto absoluto como realtivo 
        if (!existsSync(answer)) {
            stdout.write('No es una ruta válida'.red)
            exit()
        } 
        
        if(!isAbsolute(answer) === true){
          stdout.write('No es una ruta válida, Inserta una ruta absoluta'.bgRed)
          exit();
            // answer = `${__dirname}\\${answer}`  // *NO BORRAR - concatena la ruta
        }else{
            console.log('la ruta si era abs, continue joven')
            // console.log("=>".green + " " + answer);
        }
       
        // * si la ruta es rel evaluamos que no tenga el md antes de pasarla al readdir pq si no da error!
        
        // si la respuesta incluye un .md lee el archivo directamente 
        if(answer.includes('.md')){
            readFile(answer, 'utf-8', (data, error) => {
              if(error){
                stdout.write(error)
                exit()
              }else{
              stdout.write(data);
                }
              });
        } 
        else{
        // si es un directorio leelo y saca los archivos que contengan una extension .md 
        
          readdir(answer, (error, archvivos) => {
          console.log('aqui entra en caso de ser un directorio')
          archvivos.forEach((archivo) => {
            console.log("archivos => " + archivo);
           
            readFile( archivo , 'utf-8', (data) => {
              if(extname(archivo) === '.md'){
                console.log(data)
              }
            })


            // if (extname(archivo) === ".md") {
            //   // stdout.write("=>" + file.bgYellow + "\n"); // estos .md hay en el directorio 
            //   stdout.write("=>" + archivo.bgYellow + "\n"); // estos .md hay en el directorio 
            //   file = archivo;
            
            //   readFile(archivo, 'utf-8', (data)=>{
            //     console.log(data)
            //   })
            // }
            // return file;
          });
          // console.log(file.green);
        });
        
   
      
        // console.log(file.blue)

        // readFile( file , "utf-8", (data, error) => {
        //     console.log('alo'.green)
        //     if (error) {
        //       console.log(error + 'hubo un error al leer el archivo!');
        //       exit()
        //     } else {
        //       stdout.write("leyendo...".blue + data );
        //       //aqui trato de que lea el contenido del readme 
        //       console.log(toString(data).includes('http'))
        //     }
        //   });
      
    }

        //acaba el programa! 
        interface.close();
      }
    );

}

module.exports = {
  welcomeUser,
};


