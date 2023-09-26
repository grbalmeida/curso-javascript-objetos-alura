const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

const objPersonagem2 = objPersonagem;

objPersonagem2.nivel = "25";

console.log(objPersonagem);
console.log(objPersonagem2);
// { nome: 'Gandalf', classe: 'mago', nivel: '25' }
// { nome: 'Gandalf', classe: 'mago', nivel: '25' }

// Criação de uma cópia apontando para outro local da memória

const objPersonagem3 = Object.create(objPersonagem);

objPersonagem3.nivel = "30";

console.log(objPersonagem);
console.log(objPersonagem2);
console.log(objPersonagem3);
// { nivel: '30' }
console.log(objPersonagem3.nome);
// Gandalf