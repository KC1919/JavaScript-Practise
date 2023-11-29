
const accountId=123456789
let accountName="Kunal"
let accountEmail="kunal@google.com"
var password="pass1234"
// accountStatus; will give variable not defined error
let accountStatus; // correct way

/*

const => if we declare something as constant, its value cannot be changed later. 
        And its mandatory to initialize a cont variable, we are not allowed to just declare it and assign its value later.

let => if we declare something as let, then its value can be modified anytime.
var => it was used also used to store variable values, but due to some issues with var,
       eg. if someone has declared var "variable_name" and someone has declared a variable 
       with same name inside a function, so the value of the variable that was declared 
       somewhere lese in the code would also get modified. So the issue was in the variable
       scope. So now we use let instead of var.

=> we can also declare a varible name, without var let or const, but it is not recommended
  and also not allowed in modern JS.

*/

console.log(typeof accountStatus);

var sum=6;


// functional scope
function fun(a, b) {
    var sum = 5;
    console.log('Function variable: ',sum);

    //without bracket + operator is also adding the string
    console.log("Sum is " + a + b);

    //using brackets, the + will first add the values of and b  then will 
    //concatenate rest of the string
    console.log("Sum is " + (a + b));
}

fun(2, 3);
console.log('Outside function variable: ',sum);