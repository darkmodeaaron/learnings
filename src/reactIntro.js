import { Lesson } from ".";

export const reactIntro = new Lesson('22.08.23', 'asynchronus js and api\'s', '22.08.23', 'asynchronus js and api\'s', ' ', ' ', '22.08.23')

const jsonString = '{"name":"aaron", "age":"25"}'
const jsonParse = JSON.parse(jsonString)
console.log(jsonParse)

const jsonObj = {name: "sam", age: "25"}
const jsonStringify = JSON.stringify(jsonObj)
console.log(jsonStringify)