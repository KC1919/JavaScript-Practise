var data={
    "name":"Kunal",
    "age": 22,
    "sex": 'M',
    "friends":["Adi","Mukku","Goro"]
};

//this method makes the object immutable
Object.freeze(data);

// ways to access object attributes
console.log(data.friends);  //using dot operator
console.log(data["name"]);  //using name of the attribute
console.log(data["sex"]);

//delete keyword, deletes the passed object key 
delete data["age"];
delete data.sex;

console.log(data);