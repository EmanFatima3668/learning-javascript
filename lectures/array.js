let myArray = ['ali', 'ahmad' , 263 , 3773 , 'rehman'];
console.log(myArray)

// let newArray = new Array ('ahmad', 'murtaza');
// console.log(newArray)

myArray.push("ramzan");
console.log(myArray)


myArray.pop()
console.log(myArray)

myArray.unshift(9)
console.log(myArray)

myArray.shift(2)
console.log(myArray)

console.log(myArray.includes('ali'))
console.log(myArray.indexOf('ahmad'))


const Arr1 = myArray.slice(1,4);
console.log(Arr1);
console.log(myArray)

const Arr2 = myArray.splice(1,4)
console.log(Arr1);
console.log(myArray)



let Arryback = [1 ,2 ,3 , [3, 5], 4, 5,6 , [3, 5, [ 6,4, [2, 4, 5, 6, ]]]]
console.log(Arryback.flat(4))


let finalArry = [...Arr1, ...Arr2, ...myArray]
console.log(finalArry)


let score = 2020202
let secore1 = 3434433
let secore2 = 494404040

console.log(Array.of(score, secore1 , secore2))