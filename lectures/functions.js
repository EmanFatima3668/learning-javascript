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
