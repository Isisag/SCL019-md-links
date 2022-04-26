const colors = require("colors");
const fs = require("fs");
const { existsSync, readFileSync, readdirSync, readFile, exists, accessSync } = fs;
const process = require("process");
const { stdin, stdout, exit } = process;
const readline = require("readline");
const path = require("path");
const { isAbsolute, extname, resolve, join } = path;
const url = require("url");
const https = require("https");
const http = require("http");

// "test": "jest"

const resolvePath = (path) => {
  if (isAbsolute(path)){
    //? hay un error ya que al momento de hacer join por la forma de que yo llame los archivos no lo reconoce
    // path = join(path ,process.argv[3],process.argv[4]) 
    // console.log(join(path, process.argv[3], process.argv[4]))
    path
  }
  else {
    path = resolve(path)
     path;
  }
  return path
}

const exitsPath = (path) => existsSync(path) // ? console.log('si existe') : console.log('no existe')

const pathExt = (path) => extname(path) === ".md";

const readMdFile = (path) => {
  return readFileSync(path, "utf8");
};

const validateStatus = (array, path) => {
  let otroarray = []
  let objectLinks = new Object();
  
  const linksValidate = array.map((link) => {
    return new Promise((resolve, reject) => {
      let req;
      let status;
      if (link.startsWith("https")) {
        req = https.request(link, (res) => {
          status = res.statusCode;
          if (status >= 200 || status <= 399) {
            let objeto = {
              href : link,
              status : 'OK',
              path : path,
            }
            otroarray.push(objeto)
            console.log(otroarray)
          }
        });
        req.on("error", (e) => {
          let objeto = {
            href : link,
            status : 'Broken',
            path : path,
          }
          otroarray.push(objeto)
          console.log(otroarray)
        });
      } else {
        req = http.request(link, (res) => {
          status = res.statusCode;
          if (status >= 200 || status <= 399) {
            let objeto = {
              href : link,
              status : 'OK',
              path : path,
            }
            otroarray.push(objeto)
            console.log(otroarray)
          }
        });
        req.on("error", (e) => {
          let objeto = {
            href : link,
            status : 'Broken',
            path : path,
          }
          otroarray.push(objeto)
          console.log(otroarray)
        });
      }
      resolve(req);
      reject((error) => console.log("peticion erronea".red + error));
      req.end();
    });
  });
  Promise.all(linksValidate);
};


module.exports = {
  exitsPath,
  pathExt,
  resolvePath,
  readMdFile,
  validateStatus
};



