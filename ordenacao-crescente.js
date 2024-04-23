const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ['Banana', 'amora', 'uva', 'Abacaxi', 'Pera'];

const numerosEmOrdemCrescente = numeros.sort((a, b) => {
    return a - b;
});
console.log(`Ordem crescente: ${numerosEmOrdemCrescente}`);

const numerosEmOrdemDecrescente = numeros.sort((a, b) => {
    return b - a;
});
console.log(`Ordem decrescente: ${numerosEmOrdemCrescente}`);

const numerosEmOrdemCrescenteUnicode = numeros.sort();
console.log(`Ordem crescente unicode: ${numerosEmOrdemCrescenteUnicode}`);

const frustasOrdemAlfabetica = frutas.sort((a, b) => {
    if(a.toLowerCase() > b.toLowerCase()){
        return 1;
    }
    if(a.toLowerCase() < b.toLowerCase()){
        return -1;
    }
    return 0;
});
console.log(`Frutas em ordem crescente: ${frustasOrdemAlfabetica}`);

const frustasOrdemAlfabeticaDecrescente = frutas.sort((a, b) => {
    if(a.toLowerCase() > b.toLowerCase()){
        return -1;
    }
    if(a.toLowerCase() < b.toLowerCase()){
        return 1;
    }
    return 0;
});
console.log(`Frutas em ordem decrescente: ${frustasOrdemAlfabeticaDecrescente}`);

const frustasPorCaracteres = frutas.sort((a, b) => {
    if(a.length > b.length){
        return 1;
    }
    if(a.length < b.length){
        return -1;
    }
    return 0;
});
console.log(`Frutas em ordem por caracteres: ${frustasPorCaracteres}`);