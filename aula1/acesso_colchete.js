const cliente = {
    nome: "André",
    idade: 32,
    cpf: "25337152807",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente["nome"]} e ele tem ${cliente["idade"]} anos.`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente["cpf"].substring(0, 3)}`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});

/*
A chave nome tem valor André
A chave idade tem valor 32
A chave cpf tem valor 25337152807
A chave email tem valor andre@dominio.com
A chave altura tem valor undefined
*/