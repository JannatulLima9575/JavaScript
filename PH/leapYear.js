// # simple logic 
function isLeapYear (year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// const isLipi = isLeapYear(2025);
const isLipi = isLeapYear(2032);
console.log(isLipi);

//  # 1. those year that is not divisible by 100, if the year is divisible by 4; then it will be a leap year. 
