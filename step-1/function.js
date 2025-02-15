// #  Function with Parameters & Return Value: 
function addNumbers(a, b) {
    return a + b;
}

let sumNumbers = addNumbers(20, 40);
console.log(sumNumbers);



// # check Even & odd number 
function addEvenOddNumber (number) {
    if(number % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

let findNumber = addEvenOddNumber(31);
console.log(findNumber);



// #  Find Maximum Number
function findMax(a, b, c) {
    if(a > b && a > c) {
        return "A is biggest number";
    }
    else if (b > a && b > c) {
        return " B is biggest number";
    }
    else {
        return "C is biggest number";
    }
}

let sum = findMax(20, 34, 40);
console.log(sum);


// #  Fibonacci Series
function fibonacci(n) {
    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }

    return fibSeries;
}

console.log(fibonacci(5));  // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(8));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]
