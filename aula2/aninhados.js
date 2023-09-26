const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefones: ["11555555550", "11444444440"],
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente);
/*
{
  nome: 'João',
  idade: 24,
  email: 'joao@firma.com',
  telefones: [ '11555555550', '11444444440' ],
  endereco: {
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934'
  }
}
*/

console.log(cliente.endereco)
/*
{
  rua: 'R. Joseph Climber',
  numero: 1337,
  apartamento: true,
  complemento: 'ap 934'
}
*/

console.log(cliente["endereco"]);

console.log(`Rua: ${cliente["endereco"]["rua"]}`);
console.log(`Número: ${cliente.endereco["numero"]}`);
console.log(`Apartamento: ${cliente["endereco"].apartamento}`);
console.log(`Complemento: ${cliente.endereco.complemento}`);