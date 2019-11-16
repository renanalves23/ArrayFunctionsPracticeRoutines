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
//Retornar a idade real de cada cachorro utilizando map()
dogs.map((animal) => {
  return animal.age *= 7
})

console.log(dogs)










//filter()

const palavras = ["spray", "limit", "elite", "exuberant", "destruction",
"present", "happy"];

let longwords = palavras.filter((word) => {
return word.length > 6
});

console.log()
 