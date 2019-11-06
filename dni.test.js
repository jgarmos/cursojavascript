// import esDniExtranjero from './dni';

const esDniExtranjero = require('./dni');
const calcularLetraDni = require('./dni');



// const { esDniExtranjero} = require('./dni')

test('letra dni empieza por X,Y,Z para extranjeros', () => {
  expect(esDniExtranjero("X3123123")).toBe(true)
  expect(esDniExtranjero("Y3123123")).toBe(true)
  expect(esDniExtranjero("Z3123123")).toBe(true)
})

test('dni no es extranjero', () => {
    expect(esDniExtranjero("234324555")).toBe(false) 
  })



  test('calcular letra correcto para dni nacional', () => {
    expect(calcularLetraDni("52981800")).toBe(N)
  })