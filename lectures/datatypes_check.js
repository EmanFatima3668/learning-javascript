// learning to use symbol datatype 

let id = Symbol('123')
let a = Symbol('123')

console.log(id === a);

// premitive datatype are (use as call by value) include
// Number , string , null , undefined , bigInt , symbol  , boolean 

let socore = 45;
let check = true; 
let email;

// non premitive that are (call bt reference)
// arrays , objects and functions 

let numbres = ["ali", 5 , "ahmad"];

let obje = {
    name : "ahmad",
    age : 29
}

// strig a function in a varibale 

let varibaleFunction = function(){
    console.log ('fucntion done')
}