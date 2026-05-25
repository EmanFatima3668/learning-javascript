let myName = "Muhammad ramzan jamshaid"

let mySecondName = myName ;

mySecondName = "Ahmad"
console.log(myName);
console.log(mySecondName);


// non premitive datatypes use heap memomry in which both object that having same properties 
// refrence of each other and one chnage can make chnage in second autometaically 

let userOne = {
    email: "hellow@gmail.com",
    ph: "030303030303"
}

let userTwo = userOne;
userOne.email = "world@gmial.com"
console.log(userOne)
console.log(userTwo)