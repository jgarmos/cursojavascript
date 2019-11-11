const {esPar, esMayorDeEdad} = require('./ejerciciosRepaso');


test('funcion esPar devuelve true para numeros pares', () =>{
  expect(esPar(22)).toBe(true);
  expect(esPar(18)).toBe(true);
  expect(esPar(0)).toBe(true);
});

test('funcion esPar devuelve false para numeros impares', () =>{
  expect(esPar(1)).toBe(false);
  expect(esPar(13)).toBe(false);
  expect(esPar(125)).toBe(false);
});

test('funcion esMayorDeEdad devuelve true para edades mayores de 18 anos', () =>{
  expect(esMayorDeEdad(45)).toBe(true);
  expect(esMayorDeEdad(100)).toBe(true);
  expect(esMayorDeEdad(18)).toBe(true);
});


test('funcion esMayorDeEdad devuelve false para edades menores de 18 anos', () =>{
  expect(esMayorDeEdad(1)).toBe(false);
  expect(esMayorDeEdad(17)).toBe(false);
  expect(esMayorDeEdad(5)).toBe(false);
});


// test('funcion claclularNota devuelve devuelve el la nota en texto', () =>{
//   expect(claclularNota(4)).toBe("Suspenso");
//   expect(claclularNota(5.5)).toBe("Aprobado");
//   expect(claclularNota(6.2)).toBe("Bien");
//   expect(claclularNota(8)).toBe("Notable");
//   expect(claclularNota(9.5)).toBe("Sobresaliente");
// });






