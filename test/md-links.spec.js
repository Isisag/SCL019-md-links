// const mdLinks = require('../');
const {resolvePath, exitsPath,pathExt, readMdFile} = require('../functions.js')

// describe('mdLinks', () => {

//   it('should be a function', () => {
//    console.log('A')
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
    expect(exitsPath(path)).toBe(false)
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

describe('readMdFile', () => {
  it('should be a function', () => {
    expect(typeof readMdFile).toBe('function')
  });
  it('should return an string', () =>{
    const path = "test.md"
    expect(readMdFile(path)).toBe(String)
  })
});


