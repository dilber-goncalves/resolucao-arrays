function buscarEnderecos(cep){
    const enderecos = [
        {cep: 88111222, rua: "Rua dos Artistas"},
        {cep: 88111333, rua: "Rua Augusta"},
        {cep: 88222333, rua: "Avenida Paralela"},
        {cep: 89222333, rua: "Rua Carlos Gomes"},
    ]

    const enderecoEncontrado = enderecos.find((endereco) => {
        return endereco.cep === cep;
    });
    console.log(enderecoEncontrado.rua);
}

buscarEnderecos(88111222);

