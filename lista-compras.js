const palavras = ['arroz', 'feijão', 'carne', 'cerveja', 'macarrão'];
const existeBebida = palavras.some(function(valor){
    return valor === 'cerveja' || valor === 'vodka';
});

if (existeBebida) {
    console.log('Revise sua lista, João. Possui bebida com venda proibida!');
}else{
    console.log('Tudo certo, vamos as compras');
}
