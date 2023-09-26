

function first() {
    console.log(1)
}

// function that takes in another function as a parameter 
function second(callback) {
    setTimeout(() => {
        // once setTimeout is finished script will log '2' 
        console.log(2)
        // call back is then called to execute '1 2 3' in order
        callback()
    }, 2000);
}

function third() {
    console.log(3)
}

first()
second(third)

const a = false
const b = true

const promise = new Promise((resolve, reject) => {
    if (!a) {
        reject({
            value: 'false',
            message: ':('
        })    
    } else if (!b) {
        reject({
            value: 'false',
            message: ':('
        })    
    } else {
        resolve(':)')
    }
})

// if a == true .then() will run. 'message' signifies resolve value!
promise.then((message) => {
    console.log(message)
})
// if a or b == false .catch() will run
.catch((err) => {
    console.log(err.value)
})
