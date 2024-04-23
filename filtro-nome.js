const nomes = [
    'Maria',
    'João',
    'José',
    'Antônio',
    'Beatriz',
    'Camila',
    'Amanda'
];

const nomesEncontrados = nomes.filter((nome) => {
    return nome.slice(0, 1).toLowerCase() === 'a';
});

console.log(nomesEncontrados);