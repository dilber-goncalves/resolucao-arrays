const cidades = [
    'Salvador',
    'São Paulo',
    'Brasília',
    'Recife',
    'Rio de Janeiro'
];

const maiorString = cidades.reduce((acumulador, atual) => {
    return atual.length > acumulador.length ? atual : acumulador;
});

console.log(maiorString);