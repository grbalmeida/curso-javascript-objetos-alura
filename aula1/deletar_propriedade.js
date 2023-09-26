const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago",
    },
    status: "desaparecido",
};

console.log(objPersonagem);
/*
{
  nome: 'Gandalf',
  classe: 'mago',
  nivel: '20',
  aliado: { nome: 'Saruman', classe: 'mago' },
  status: 'desaparecido'
}
*/

delete objPersonagem.aliado;
console.log(objPersonagem.aliado); // undefined
console.log(objPersonagem);
/*
{
  nome: 'Gandalf',
  classe: 'mago',
  nivel: '20',
  status: 'desaparecido'
}
*/

delete objPersonagem["status"];
console.log(objPersonagem);
// { nome: 'Gandalf', classe: 'mago', nivel: '20' }