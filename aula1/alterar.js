const pessoa = {
    nome: "Luma",
    profissao: "Engenheiro",
};

console.log(pessoa.nome);
// Luma

console.log(pessoa.telefone);
// undefined

pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone);
// 11 2223333444

pessoa.nome = "Luma Silva";

console.log(pessoa);
/*
{
  nome: 'Luma Silva',
  profissao: 'Engenheiro',
  telefone: '11 2223333444'
}
*/

const novaPessoa = {
    nome: "Pedro",
};

pessoa = novaPessoa;
// TypeError: Assignment to constant variable.