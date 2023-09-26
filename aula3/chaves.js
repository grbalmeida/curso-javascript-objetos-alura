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

const chavesDoObjetos = Object.keys(cliente);

console.log(chavesDoObjetos);
// [ 'nome', 'idade', 'email', 'telefones', 'enderecos' ]

if (!chavesDoObjetos.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
}