import { Lesson } from ".";

export const reactIntro = new Lesson('22.08.23', 'asynchronus js', '22.08.23', 'asynchronus js', '/src/noteImages/asynchronousJsNotes.png', ' ', '22.08.23')

/*
const jsonString = '{"name":"aaron", "age":"25"}'
const jsonParse = JSON.parse(jsonString)
console.log(jsonParse)

const jsonObj = {name: "sam", age: "25"}
const jsonStringify = JSON.stringify(jsonObj)
console.log(jsonStringify)


const name = 'aaron'

let p = new Promise((resolve, reject) => {
    if (name === 'aaron') {
        resolve('is aaron')
    } else {]
        reject('is not aaron')
    }
})

p.then((person) => {
    console.log(person)
}).catch ((person) => {
    console.log(person)
})

*/