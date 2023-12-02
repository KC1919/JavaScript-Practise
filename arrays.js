// Declaration ways
// 1) 
let array = [1, 2, 3];

// 2)
let arr = new Array(1, 2, 3, 4, "Kunal")
// console.log(arr);

//3 
let arr1 = ['apple', 'banana', 'grapes', 'papaya']
// console.log(arr1);


//adds an element to the back of the array
array.push([4, 5, 6, "kunal"]);

// Add two or more arrays together
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]

// Method 1
let a3 = a1.concat(a2);
// console.log(a3);

// Method 2
let a4 = [...a1, ...a2]
console.log(a4);

// console.log(array);
// console.log(array[3][3]);  

// Removes the last element of the array
// array.pop();

array[0]++;

//removes first elemnt of the array
var remData = array.shift();
// console.log(remData);

// console.log(array);

//adds an element in front of the array
array.unshift("Ayush");
// console.log(array);

arr1.unshift('orange');
// console.log(arr1);