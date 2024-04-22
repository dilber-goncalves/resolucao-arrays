const frutas = ['banana', 'maçã', 'abacaxi', 'pera', 'uva'];

const arrayInverso = frutas.reverse().join(', ');
console.log(arrayInverso);

frutas.shift();
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.push('melão');
console.log(frutas);