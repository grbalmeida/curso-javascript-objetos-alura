const cliente = {
    nome: "André",
    idade: 32,
    cpf: "25337152807",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos.`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);