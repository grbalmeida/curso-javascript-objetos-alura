const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefones: ["11555555550", "11444444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.error("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(5);
cliente.efetuaPagamento(10);
cliente.efetuaPagamento(20);
cliente.efetuaPagamento(40);
cliente.efetuaPagamento(80);
cliente.efetuaPagamento(160);

/*
Pagamento realizado. Novo saldo: 195
Pagamento realizado. Novo saldo: 185
Pagamento realizado. Novo saldo: 165
Pagamento realizado. Novo saldo: 125
Pagamento realizado. Novo saldo: 45
Saldo insuficiente
*/