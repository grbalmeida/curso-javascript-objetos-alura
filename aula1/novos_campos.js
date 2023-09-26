const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@gmail.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES",
};

pessoa.seguro_social = "32242523";
pessoa.cpf = "18268502010";

console.log(`Nome: ${pessoa.nome}`);
console.log(`Data de nascimento: ${pessoa.dataNascimento}`);
console.log(`Carteira de identidade: ${pessoa.carteiraIdentidade.substring(0, 4)}`);
console.log(`Email: ${pessoa.email}`);
console.log(`Telefone: ${pessoa.telefone}`);
console.log(`Cidade: ${pessoa.cidade}`);
console.log(`Estado: ${pessoa.estado}`);
console.log(`Seguro social: ${pessoa.seguro_social.substring(0, 4)}`);
console.log(`CPF: ${pessoa.cpf.substring(0, 4)}`);

/*
Nome: Bruce Banner
Data de nascimento: 25/01/1980
Carteira de identidade: 9977
Email: profbanner@gmail.com
Telefone: +552877776666
Cidade: Cachoeiro de Itapemirim
Estado: ES
Seguro social: 3224
CPF: 1826
*/