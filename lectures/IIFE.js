// immediate invoked function some is liyuse kiye jaty ha k Global Scope Pollution se bachyaa jaye 
// let name = ali ab ya varibale just sope k and accible hoga to is chez ko gloabally access nai ki a ja skta 

function chai(){
    console.log(`DB connected`)
}
chai();

// ab is ko hm IIFE k through kry gy or foran execute kry gy 

(function chaiWala(){
    console.log(`DB connected`)
})();



// same kam ab hm ny arrow function k thorugh krdia ha 
(()=>{
    console.log(`DB connected`)
})();