// for of looping method in javascript (Basic)
 const numbers = [1, 2, 3, 4, 5, 56, 50, 40];

 for (let i = 0; i <numbers.length; i ++) {
    const number = numbers[i];
    console.log(number);   
 }

// for of looping method in javascript (advanced) 
const values = [1, 2, 3, 4, 5, 56, 50, 40];

for (const number of values) {
    console.log(number);
}

// for of looping method in javascript (Basic)
const lists = ['apple', 'banana', 'mango', 'orange', 'grape'];
for ( let i = 0; i < lists.length; i ++) {
    const list = lists[i];
    console.log(list);
}

// for of looping method in javascript (advanced) 
const fruits = ['apple', 'banana', 'mango', 'orange', 'grape'];

for (let fruit of fruits) {
    console.log(fruit);
}


// object 
const products = [
    {id : 1, name : 'laptop', price : 50000},
    {id : 2, name : 'mobile', price : 15000},
    {id : 3, name : 'desktop', price : 30000},
]
for (const product of products) {
    console.log(product);
}
