const myArray = [1,2,3,4,5,5]

for (const num of myArray) {
    console.log(num)
}


const greeting = "hello word"
for (const greet of greeting) {
    console.log(greet)
}

const map = new Map()
map.set('In', "india")
map.set('pk', "pakistan")
map.set('us', "united states")
console.log(map)
for (const [key ,value] of map) {
    console.log([key , value])
}