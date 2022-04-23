const https = require('https')

const options = {
    hostname: 'encrypted.google.com',
    port: 443,
    path: '/',
    method: 'GET'
  };

let enlace = 'https://jestjs.io/docs/es-ES/getting-started'
const req = https.request(enlace, (res) => {
    console.log('statusCode:', res.statusCode);
    // console.log('headers:', res.headers);
  
    // res.on('data', (d) => {
    //   process.stdout.write(d);
    // });
  });
  
  req.on('error', (e) => {
    console.error(e);
  });
  req.end();