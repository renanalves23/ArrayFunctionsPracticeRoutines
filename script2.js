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
//regular function
/* array.forEach(function(element){
  console.log(element)
}) */

//console.log(array)
  //arrow function
/*   
const arr = array.forEach((element) => {console.log(element)}) //somente com um elemento
//com elemento e com index
const arrEInd = array.forEach((element, index) => {console.log(element, index)}) 
 */

 array.forEach(function(element, index){
   if(element === 1) {
     array[index] = 'vira outra coisa'
   }
 })
 //console.log(array)

          //MAP()
  
const array2 = [5,6,7,8,9];

array2.map(function(element, index) {
  console.log(element, index)
})













