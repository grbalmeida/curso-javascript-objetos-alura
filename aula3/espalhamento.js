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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefones[0], cliente.telefones[1]);
// Ligando para 11555555550
// Ligando para 11444444440
ligaParaCliente(...cliente.telefones);
// Ligando para 11555555550
// Ligando para 11444444440

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
};

console.log(encomenda);
/*
{
  destinatario: 'João',
  rua: 'R. Joseph Climber',
  numero: 1337,
  apartamento: true,
  complemento: 'ap 934'
}
*/