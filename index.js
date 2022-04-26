module.exports = () => {
  // ...
};

const colors = require('colors');
const fs = require('fs');
const { welcomeUser} = require('./user.js');
const process = require('process')
const {exit} = process
const path = require('path');
const {readdir} = path;

const { resolvePath,pathExt, readMdFile, exitsPath, validateStatus } = require('./functions.js');

// todo -1) recibir input del usuario y guardarla en una variable
// todo -3) evaluar que ese input sea una ruta 
// todo -4) evaluar que tipo de ruta es (relativa / absoluta)
// todo -5) si es realtiva convetir a absoluta 
// todo -6) una vez con la ruta absoluta recorrer el directorio 
// todo -7) buscar archivo(s) de extension .md 

    //  C:\Users\isisd\3D Objects\Laboratoria\Proyecto 4\..\mock\mock.md
    // ./mock/mock.md
    // mock\otracosa.md
const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9!@:%_\+.~#?&\/\/=]*)/g;
const options = {}

function mdLinks( path , options ){

    console.log(process.argv)
    // console.log(process.argv[2])
    // let arg1 = process.argv[2]
    // let arg2 = process.argv[3]
    // let arg3 = process.argv[4]

    path = process.argv[2]
    return new Promise((resolve) => {
    resolvePath(path)
    if(exitsPath(path)){
        if(pathExt(path)){
            let mdFile = readMdFile(path)
            if(mdFile.includes('http','https')){
              let arrayLinks = mdFile.match(regex)
              validateStatus(arrayLinks);
            }else{
              console.log('Este archivo no contiene links'.red)
            };
        }
        else{
        console.log('no es un archivo .md'.red)
        }
    }else{
     console.log('Este archivo no existe'.red)
    }


  });
} 
mdLinks();



