const items = [
    { name: 'Bike',          price: 100 },
    { name: 'TV',            price: 200 },
    { name: 'Album',         price: 10 },
    { name: 'Book',          price: 5 },
    { name: 'Phone',         price: 500 },
    { name: 'Computer',      price: 1000 },
    { name: 'Keyboard',      price: 25 }
];

const filteredItems = items.filter((item) => {
  return item.price <= 100
})

console.log(filteredItems)


items.forEach((item) =>{
  console.log(item.price)
})

//pouco usadas some() e every()

const itensBaratos = items.some((item) => { //retorna verdadeiro assim que encontrar o que procura
    return item.price <= 50;
});

//everey verifica se todos os itens do array match the passed condition
        //se sim, aparece true
 const todosCaros = items.every((item) => {
     return item.price > 100
 });
 
 console.log(todosCaros) // todos são caros???  item.price > 100 ?????  false




