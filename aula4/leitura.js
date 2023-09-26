const dados = require('./cliente.json');

console.log(dados);
console.log(typeof dados); // object

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString); // string
console.log(clienteEmString.nome); // undefined porque está tentando ler a propriedade nome de uma string

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
/*
{
  nome: 'Joao',
  email: 'joao@firma.com',
  telefone: [ '11223344', '11922334453' ],
  endereco: {
    rua: 'R. Joseph Climber',
    numero: 404,
    apartamento: true,
    complemento: 'ap 934'
  }
}

*/