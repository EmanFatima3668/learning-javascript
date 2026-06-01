let myObject = {
    js : "javascript",
    Py : "python",
    html : "hyper text tranfer protocol"
}

console.log(myObject)
for (const key in myObject) {
console.log(`${key} is stand for ${myObject[key]}`)
    
}