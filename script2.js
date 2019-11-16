//USOS DE FOR E .FOREACH()

//array simples
    const array = [1,2,3,4];
//for acessa tanto prototype Array, como tbm prototype HtmlCollection
    //sintaxe:
  //for (let i = 0; i < array.length; i++)

//.forEach()
  //sintaxe:
  /* 
  array.forEach((a) => {
    console.log(a)
  });
   */

  
const arr = array.forEach((element) => {
  return element;
})
console.log(arr)  


