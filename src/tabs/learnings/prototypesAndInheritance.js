import { Lesson } from "../..";

const prototypeCodeLog = 'quickly went over protypes and inheritance today. was looking to see if i could make adjustments to how this project is made. to post everything is wrapped under one object \'Lesson\'. im looking to refactor this to create more objects to separate code into more objects. this should be in line with oop principles.' 

export const prototypesAndInheritance = new Lesson('16.08.23', 'prototypes and inheritance', '16.08.23', 'prototypes and inheritance', '/src/noteImages/prototypeNotes.png', prototypeCodeLog, '16.06.23')

/*

function Person(name, age) {

    this.name = name
    this.age = age
    this.profile = function() {
        console.log(`hi my name is ${this.name}. i am ${this.age} years old`)
    }

}

const aaron = new Person('aaron', 25)

function Player(name) {
    this.name = name
}

Person.prototype.sayPlayer = function() {
    console.log('i am a player')
}

*/

