const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const sum = (a, b) => a + b;


const valorDelEuro = {
    yenJapan : 156.5,
    dollarUSA : 1.07,
    poundBritish : 0.87,
}

const fromDollarToYen = (amountOfDollars) => {
    let euros = amountOfDollars / valorDelEuro.dollarUSA;
    let yens = euros * valorDelEuro.yenJapan;
    return yens;
};

const convertirEuroADolar= (amountOfEuros) => {
    let dollars = amountOfEuros * valorDelEuro.dollarUSA;
    return dollars;
};

const fromYenToPound = (amountOfYens) => {
    let euros = amountOfYens / valorDelEuro.yenJapan;
    let pounds = euros * valorDelEuro.poundBritish;
    return pounds;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }