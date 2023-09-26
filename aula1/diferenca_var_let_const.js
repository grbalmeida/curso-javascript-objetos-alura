var exibeMensagem = function() {
    var mensagemForaDoIf = 'Caelum';

    if (true) {
        var mensagemDentroDoIf = 'Alura';
        console.log(mensagemDentroDoIf); // Alura
    }

    console.log(mensagemForaDoIf); // Caelum

    console.log(mensagemDentroDoIf); // Alura
}

exibeMensagem();

var exibeMensagem = function() {
    mensagem = 'Alura';
    console.log(mensagem); // Alura
    var mensagem;
}

exibeMensagem();

void function() {
    console.log(mensagem);
    // undefined
}();

var mensagem;

var exibeMensagem = function() {
    if (true) {
        var escopoFuncao = 'Caelum';
        let escopoBloco = 'Alura';

        console.log(escopoBloco); // Alura
    }

    console.log(escopoFuncao); // Caelum
    // console.log(escopoBloco);
    // escopoBloco is not defined
}

exibeMensagem();

void function() {
    let mensagem;
    console.log(mensagem); // undefined
}();

void function() {
    const mensagem = 'Alura';
    console.log(mensagem); // Alura
    // mensagem = 'Caelum';
    // TypeError: Assignment to constant variable.
}();