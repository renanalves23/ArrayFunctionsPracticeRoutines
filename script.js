//filter map reduce
data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

//utilizando o filter() para retornar os dogs

let dogs = data.filter((animal) => {
  return animal.type === 'dog';
});
//Retornar a idade real de cada cachorro(multiplicando por 7) utilizando map()
dogs.map((animal) => {
  return animal.age *= 7
});

//Somar a idade de todos os cachorros utilizando reduce()
var calcAge = dogs.reduce((sum, animal) => {
  return sum + animal.age;
}, 0);

//Detalhamento do reduce

/*
 array.reduce( function( prevVal, elem, index, array ) {
  ...
}, initialValue ); //o zero passado acima, se refere ao valor inicial

          prevVal:Valor cumulado retornado em cada iteração

          elem:Valor do elemento

          indexÍndice em cada iteração, da esquerda para a direita

          arrayArray original invocando o método

          initialValue(opcional) Objeto usado como primeiro argumento na primeira iteração (mais à esquerda)

*/

// console.log(dogs)
// console.log(calcAge)

//filter()

const palavras = ["spray", "limit", "elite", "exuberant", "destruction",
"present", "happy"];

let longwords = palavras.filter((word) => {
return word.length > 6
});


              //OUTRO USO PARA MAP()

const numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt)
//roots agora é [1, 2, 3]
//numbers continua sendo [1, 4, 9];


console.log()
 