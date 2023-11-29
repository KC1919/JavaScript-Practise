let fname = "Kunal" // string type
let age = 23 // number type
let email = "kunal@gmail.com"
let password = "123456789"
let birth = null // null is an object
let weight; // if we do not initialize a variable, it is of type 'undefined'
let available = true || false // boolean type
let height = 5.10 // number type, in js decimal int all are treated as numbers

const data = {
    fname,
    email,
    age,
    password
}



console.table([typeof fname, typeof age, typeof email, typeof password, typeof data, typeof birth, typeof weight, typeof available, typeof height])