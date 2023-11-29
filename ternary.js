function leapYear(year){

    //nested ternary operators
    return year%100 == 0?year%400==0?"Leap year":"Not a Leap year":year%4==0?"Leap year":"Not a leap year";
}

console.log(leapYear(2400));
console.log(leapYear(1203));
console.log(leapYear(1992));
console.log(leapYear(1900));