const friends = ["Lima","Shima", "Ema", "Ruma", "Jhuma"];
console.log(friends);

// array print using for loop
for( let i = 0; i < friends.length; i++) {
    // let element = friends[i];
    // console.log(element);
    console.log(friends[i]);
}


// # break method
const classMates = ["Lima","Shima", "Ema", "Ruma", "Jhuma"];

for (let i = 0; i < classMates.length; i++) {
    const buddies = classMates[i];

    if (buddies === "Ema") {
        break;
    }
    console.log(buddies);
}

// # continue 
const sisters = ["Lima","Shima", "Ema", "Ruma", "Jhuma"];

for (let i = 0; i < sisters.length; i++) {
    const sibling = sisters[i];

    if (sibling === "Ema") {
        continue;  // ignore selected one and print next
    }
    console.log(sibling);
}


// # problem
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([2, 5, 8, 10]));
