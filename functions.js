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

let message;

// const validatePath = (path) => !existsSync(path) ? false : true
const exitsPath = (path) => existsSync(path) // ? console.log('si existe') : console.log('no existe')
const pathExt = (path) => extname(path) === '.md'

const resolvePath = (path) => { if(!isAbsolute(path)) return resolve(path); else{ console.log('si era abs')} }

const readMdFile = (path) => { return readFileSync(path, "utf8"); }

const validateStatus = (array) => {

 const linksValidate = array.map((link) =>{
  return new Promise ((resolve, reject) => {
    let req;
    let status;
    if(link.startsWith('https')){
      req = https.request( link,(res) => {
        status = res.statusCode
        if(status >= 200 || status <= 399){
          console.log(link + ` ${status}`.blue)
        }
      });
      req.on('error', (e) => {
        console.log(link + '  is Broken'.red)
      });
    }
    else{
      req = http.request(link, (res) => {
        status = res.statusCode
        if(status >= 200 || status <= 399){
          console.log(link + ` ${status}`.blue)
        }
      });
      req.on('error', (e) => {
        console.log(link + '  is Broken'.red)
      });
    }
    resolve(req)
    reject(error => console.log('peticion erronea'.red + error))
    req.end();
    });

  })
  Promise.all(linksValidate);
}




module.exports = {
    exitsPath, pathExt, resolvePath, readMdFile, validateStatus
};
