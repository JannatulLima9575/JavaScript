let score = 50

console.log(typeof score);
console.log(typeof (score));

let position = "Third"
console.log(typeof position);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let pass = "1234abd"
console.log(pass);
let upPass = Number(pass)
console.log(typeof upPass);
console.log(upPass);

/* note */
// "50" - 33 
// "123abd" - NaN but type will be number 
// true - 1 and false will be - 0


// #about Boolean True/False 
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLogged = 0

let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged);

// true - 1 and false will be - 0
// " " - false
// "Lima" - true

let isString = 50
let conString = String(isString)
console.log(conString);
console.log(typeof conString);

// ****** Operations ******

let value = 9
let negValue = -value
console.log(negValue);

// Basic operation 
console.log(10+5);
console.log(10-5);
console.log(10*5);
console.log(10**5);
console.log(10/5);
console.log(10%5);

// concatenation 
let str1 = "Hello"
let str2 = " Bangladesh"
let str3 = str1 + str2
console.log(str3);

