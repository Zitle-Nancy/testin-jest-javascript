const utils = require('../utils');

describe('cafee', ()=>{
  test('should', async() =>{
    const result = await utils.getCoffee()
    expect(result).toBe("☕️");
  })
})

describe('kebab function',() =>{
  test('should', ()=> {
    const result = utils.kebab('lala aoaos aAs')
    expect(result).toBe("lala-aoaos-a-as")
  })
});

describe('countWords function', () => {
  test('should', ()=> {
    const result = utils.countWords('la la la ds ds')
    expect(result).toEqual({"la":3, "ds":2})
  })
});


describe('getId function', () => {
  test('should', ()=> {
    const result = utils.getID()
    expect(result).toEqual({
      id:expect.any(String),
      create_at:expect.any(Date)
    })
  })
});

// jest.spyOn(utils,'getId');
// const funcion = jest.fn();

// describe('getIfFn', () => {
//   test('should', ()=> {
//     const result = make(funcion)
//     expect(funcion).toBeCalled();
//     expect(funcion).toBeCalledWith({})
//   })
// });

// describe('getId function', () => {
//   test('should', ()=> {
//     const result = utils.getID()
//     expect(utils.getID).toBeCalled()
//   })
// });

// describe('countWords function', () => {
//   test('should', ()=> {
//     const result = utils.countWords('la la la')
//     expect(result).toMatchSnapshot()
//   })
// });
