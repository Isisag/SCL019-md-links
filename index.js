module.exports = () => {
  // ...
};

const colors = require('colors');
const { welcomeUser} = require('./user.js');
const {exit} = require('process') 
const path = require('path');
const {readdir} = path;

// todo -1) recibir input del usuario y guardarla en una variable
// todo -3) evaluar que ese input sea una ruta 
// todo -4) evaluar que tipo de ruta es (relativa / absoluta)
// todo -5) si es realtiva convetir a absoluta 
// todo -6) una vez con la ruta absoluta recorrer el directorio 
// todo -7) buscar archivo(s) de extension .md 


    //  C:\Users\isisd\3D Objects\Laboratoria\Proyecto 4\..\mock\mock.md
    // ./mock/mock.md
    // mock\otracosa.md


function mdLinks(answer){
  welcomeUser(answer);
} 
mdLinks();



