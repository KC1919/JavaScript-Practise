let a="hello"
let b=5

console.log(a+b);
// O/P -> hello5, if we add (String + Number), the output is a String

let c=1;
let d=true;

console.log(c+d);
// O/P -> 2, boolean + number, gives output as number, boolean converts to 1=true or 0=false

let e=Boolean("");     // O/P-> false, converting empty string to boolean
let f=Boolean("Hello");// O/P-> true, converting non-empty string to boolean
console.log(e);

console.log(+"1"); // converts string to number

console.log(1+1+"2"); // it adds the number first then append the string to the result
// O/P -> 22

console.log("1"+2+2); // concatenates all the characters as string
// O/P -> 122

/*
"1"+2+2 -> So if the expression is staring from a string then all the elements 
would be operated as string

1+1+"2" -> if the expression is starting from number and string is at the end, so 1st 
the number expression would be evaluated then it would be concatenated as string

 */