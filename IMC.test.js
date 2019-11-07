const {calcularIMC, devolverIMCdescriptivo} = require('./IMC');


test('funcion calcularIMC devuelve IMC correcto al introducir una altura y peso correctos', () =>{
    expect(calcularIMC(71,1.64)).toBe(26.4);
  });



test('funcion devolverIMCdescriptivo devuelve texto correcto al introducir un IMC valido', () =>{
    expect(devolverIMCdescriptivo(10)).toBe("Desnutrido");
    expect(devolverIMCdescriptivo(17)).toBe("Delgado");
    expect(devolverIMCdescriptivo(20)).toBe("Ideal");
    expect(devolverIMCdescriptivo(27)).toBe("Sobrepeso");
    expect(devolverIMCdescriptivo(32)).toBe("Obeso");
  });


