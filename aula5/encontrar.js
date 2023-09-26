const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    return lista.find(item => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Olva");
console.log(encontrado);
/*
{
  nome: 'Olva',
  email: 'olippini0@deviantart.com',
  telefone: [ '4733865848', '47933865848' ],
  endereco: {
    logradouro: 'Rua Transport',
    numero: '05',
    cep: '46140',
    apartamento: true,
    complemento: 'ap 102'
  }
}
*/

const encontrado2 = encontrar(clientes, "email", "orajchert1@clickbank.net");
console.log(encontrado2);
/*
{
  nome: 'Oralle',
  email: 'orajchert1@clickbank.net',
  telefone: [ '5896279799', '58996279799' ],
  endereco: {
    logradouro: 'Rua Kedzie',
    numero: '89',
    cep: '613840',
    apartamento: false
  }
}
*/