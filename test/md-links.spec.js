// const mdLinks = require('../');
// import {exitsPath,pathExt,resolvePath,readMdFile,validateStatus} from '../functions.js'
const {resolvePath, exitsPath,pathExt} = require('../functions.js')

// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });

describe('resolvePath', () => {
  it('should be a function', () => {
    expect(typeof resolvePath).toBe('function')
  });
  it('should return an string', () =>{
    const path = "test.md"
    expect(resolvePath(path)).toBeInstanceOf(String)
  })
});

describe('exitsPath', () => {
  it('should be a function', () => {
    expect(typeof exitsPath).toBe('function')
  });
  it('should return an string', () =>{
    const path = "test.md"
    expect(exitsPath(path)).toBe(true)
  })
});

describe('pathExt', () => {
  it('should be a function', () => {
    expect(typeof pathExt).toBe('function')
  });
  it('should return an string', () =>{
    const path = "test.md"
    expect(pathExt(path)).toBe(true)
  })
  it('should return an error', () => {
    const path = "index.js"
    expect(pathExt(path)).toBe(false)
  })
});

