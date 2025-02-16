// # Basic type of Array 
let friends = [];
console.log(typeof friends);

let thisTrio = ["Lima", "Tamanna", "Ruba"];
console.log(thisTrio);
console.log(typeof thisTrio);
console.log(thisTrio.length);
console.log(thisTrio[2]);

// # About Push, Pop, Shift $ Unshift in Array 
let fruits = ["Apple", "Banana"];
// work in last 
fruits.push("Orange");
fruits.pop();

// work in first 
fruits.unshift("litchi");
fruits.shift();
console.log(fruits);


// # about slice and splice in Array 
let marks = [20, 35, 76, 24, 67, 45, 67, 99, 40];
let newMarks = marks.slice(2, 8);
let newMark = marks.splice(2, 8);
console.log(newMarks);
console.log(newMark);
