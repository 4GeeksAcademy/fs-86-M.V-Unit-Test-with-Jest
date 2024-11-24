test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("Un dolar debe ser equivalente a la conversion en yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const valorDePrueba = 3.5;
    const valorEsperado = (3.5 / 1.07) * 156.5;
    const resultado = fromDollarToYen(valorDePrueba);
    expect(resultado).toBeCloseTo(valorEsperado);
});

test ("Un pound debe ser equivaente a la conversión en yenes", function() {
    const {fromYenToPound} = require ('./app.js');
    const valorDePrueba = 3;
    const valorEsperado = (3/156.5) * 0.87;
    const resultado = fromYenToPound(valorDePrueba);
    expect(resultado).toBeCloseTo(valorEsperado);

});