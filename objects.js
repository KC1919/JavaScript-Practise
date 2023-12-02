var data = {
    "name": "Kunal",
    "age": 22,
    "sex": 'M',
    "friends": ["Adi", "Mukku", "Goro"]
};

//----this method makes the object immutable-----
Object.freeze(data);

//------ Ways to access object attributes----------
// using dot operator
// console.log(data.friends);  
// using name of the attribute
// console.log(data["name"]);  


//delete keyword, deletes the passed object key 
delete data["age"];
delete data.sex;

// console.log(data);

//------- Object destructuring------------

let { name } = data
// console.log(name);

// we can give custom name to properties
let { name: n } = data
//gives the same O/P as line 27
// console.log(n);

let data2 = {
    email: 'kunal@email.com',
    profile: 'Backend developer',
    exp: '1 yr'
}

//----------- Concatenating the two objects------------
let data3 = { ...data, ...data2 }
// console.log(data3);

let data4=Object.assign({},data,data2) // gives the same output as line 40
// console.log(data4);

// -------Loop through objects keys and values or both-------------

// returns an array of object keys
// console.log(Object.keys(data2));

// returns an array of object values
// console.log(Object.values(data2));

// returns an 2d array with key and value pair as an each array at each index
// console.log(Object.entries(data2));

// Looping
Object.keys(data2).map(el=>{
    console.log(data2[el]);
})

Object.keys(data2).forEach(el=>{
    console.log(data2[el]);
})
