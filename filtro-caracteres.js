const cidades = [
    'Salvador',
    'São Paulo',
    'Brasília',
    'Recife',
    'Rio de Janeiro'
];

const novoArray = cidades.filter((cidade) => {
    return cidade.length <= 8;
});
const arrayFormatado = novoArray.join(', ');
console.log(novoArray);
console.log(arrayFormatado);