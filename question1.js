//1. Write a program to find whether a given year is a leap year or not.


function isLeapYear(year) {
    if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)) {
        console.log("jo")
        return true;
    }
    return false;
}



let year = 2015;
if (isLeapYear(year)) {
    console.log("Yes, that's a leap year!!");
}
else {
    console.log("No, that's not the one!!")
}
