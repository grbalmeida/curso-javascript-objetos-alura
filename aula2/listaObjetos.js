const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefones: ["11555555550", "11444444440"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }
];

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

function exibeEndereco(endereco) {
    console.log(`Rua: ${endereco.rua}`);
    console.log(`Número: ${endereco.numero}`);
    console.log(`Apartamento: ${endereco.apartamento}`);
    console.log(`Complemento: ${endereco.complemento}`);
    console.log(''.padEnd(30, '-'));
}

cliente.enderecos.forEach(endereco => {
    exibeEndereco(endereco);
});

const listaApenasApartamentos = cliente.enderecos.filter(endereco => endereco.apartamento);

console.log('Lista apenas apartamentos\n');
listaApenasApartamentos.forEach(apartamento => exibeEndereco(apartamento));

