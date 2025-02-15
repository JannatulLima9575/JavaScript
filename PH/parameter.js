// #sum of two numbers in function 
function sum(x, y) {
    const result = x + y;
    return result;
}
const total = sum(20, 10);
console.log(total);

// #lets make the fish dishes 
function fishDishes(fish, vegetables,spice) {
    console.log("hot the oil");
    console.log("fried the spice");
    console.log("mixed the vegetables");
    console.log(fish + "keep");
    return "The fish dishes are ready!";   
}

const result = fishDishes("hilsa", "potato", "yellow");
console.log(result);

// # find score using function 
function square(x,y){
    console.log("The value of square :", x * y);
    return;
    
}
square(4,5);

function addAll(a,b,c,d){
    const sumAll = a + b + c + d;
    console.log("The sum is : " , sumAll); 
}
addAll(2,4, 6, 8);