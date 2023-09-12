const capitalized = require('./Testing');
const reverseString = require('./Testing')
const calculadora = require('./Testing')
const caesarCipher = require('./Testing')
const analyzeArray = require('./Testing')
// test('Transforme arroz em Arroz', ()=>{
//     expect(capitalized('arroz')).toMatch(/[A-Za-z]/);
// });


// test('Receba arroz e transforme em zorra', ()=>{
//     expect(reverseString('arroz')).toBe('zorra');
// });

// test('Some 1 mais 2', ()=>{
//     expect(calculadora.adicionar(1, 2)).toBe(3);
// });

// test('Subtraia 2 por 1', ()=>{
//     expect(calculadora.subtrair(2,1)).toBe(1);
// });

// test('Divida 4 por 2', ()=>{
//     expect(calculadora.dividir(4,2)).toBe(2);
// });


// test('Multiplique 2 vezes 1', ()=>{
//     expect(calculadora.multiplicar(2,1)).toBe(2);
// });

// test('Faça com que ABC seja BCD', ()=>{
//     expect(caesarCipher('ABC',1)).toBe('BCD');
// });

test('Retorne as propriedades meio, min, max e largura', ()=>{{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        meio: 3,
        min:1,
        max:8,
        length:6
    })
}})
