const coding = ['js' , 'cpp' , 'java' , 'python']

coding.forEach((item)=>{
    // console.log(item);
})
// const coding = ['js' , 'cpp' , 'java' , 'python']

coding.forEach(function(item){
    console.log(item)
})

// objests in array using for each 

const wording = [
    {
        ali : "aliahmad",
        age: 10 ,
        class : 12  

    },
    {
        ali : "aliahmad",
        age: 10 ,
        class : 12  

    },
    {
        ali : "aliahmad",
        age: 10 ,
        class : 12  

    },
]

wording.forEach((item)=>{
    console.log(item);
})

//  
const pages = [1,2,3,4,5,6]

function printMe(item){
   console.log(item)
}
 
pages.forEach(printMe)