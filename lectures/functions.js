// function firstProgram(number1 , number2){
//         console.log(number1 + number2)
// }
// firstProgram(3 , 5);
function firstProgram(number1 , number2){
        console.log(number1 + number2)
}
let result = firstProgram(3 , 5);
console.log(result);

function firstPrograms(number1 , number2){
        // console.log(number1 + number2)
        return number1 + number2
}
let results = firstPrograms(3 , 5);
console.log(results);

function isLoggedIn(username ='sam')
{
    if(!username){
        console.log('plese enter your name')
        return
    }
    return `${username} just logged in `
}
console.log(isLoggedIn());

//  rest opreator ... are used for adding multipul prices based on one parameter 

function calculatePrice(valu1, value2, ...numb1){
     return numb1
}
console.log(calculatePrice(300, 499 , 5000 , 5005))

// object ko functions  ma kesy use kia jata ha 

let object = {
    username : "ahmad",
    age : 10 
}

function objFunction(user){
    return `${user.username} is ${user.age} year old`
}
console.log(objFunction(object));


// array ko bhi as it hi use ki aja skta ha 


const myArray = ['ahmad ', 'ali ', 'murtaza']
function getArrayValue(getArray){
    return getArray[2]
}
console.log(getArrayValue(myArray))