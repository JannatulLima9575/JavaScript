// # problem-1: ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো
let temp = []
for (let i = 1; i < 51; i ++) {
    if (i % 3 == 0 && i % 5 == 0) {
        temp.push(i)
    }
}
console.log(temp);

// var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
// # problem-2 উপরে এর  এরে  থেকে যেখানে ফ্রেন্ড এর নাম এর  মধ্যে বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let bigFriend = friends[0];

for(let i = 0; i < friends.length; i ++) {
    const element = friends[i];

    if (element.length > bigFriend.length) {
        bigFriend = element;
    }
}
console.log(bigFriend);



// # problem-3 var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// উপরের এইয়ারের ভেতর থেকে শুধু জোড় সংখ্যা গুলোকে নিয়ে আরেকটা এরে তৈরি করতে হবে

let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// var evenNumbers = numbers.filter(num => num % 2 === 0);
let evenNumbers = []

for (let i = 1; i < numbers.length; i ++) {
    if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i])
    }
}
console.log(evenNumbers);
