const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }

        if (a[propriedade] > b[propriedade]) {
            return 1;
        }

        return 0;
    });

    return resultado;
}

const nomes = clientes.map(cliente => cliente.nome);
console.log(nomes);
/*
[
  'Olva',     'Oralle',   'Amye',
  'Greer',    'Juliet',   'Blakeley',
  'Leeann',   'Tildi',    'Kirby',
  'Stephine', 'Carolina', 'Jerrome',
  'Emilee',   'Way',      'Dorothea',
  'Flori',    'Cecelia',  'Xylia',
  'Husein',   'Izaak'
]
*/

const ordenadoPorNome = ordenar(clientes, "nome");

console.log(clientes.map(cliente => cliente.nome));