const numeros = [1, 98, -76, 0, 12, 19, 5, 68, 44];

const maiorNumero = numeros.reduce((acumulador, atual) => {
    return Math.max(acumulador, atual);
});

console.log(maiorNumero);