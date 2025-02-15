function number(number) {
    const mulNumber = number * 10;
    return mulNumber;
}
number(10);
const output = number(10);
console.log(output);

// # Traffic Light Simulator
function trafficLight(signal) {
    if (signal === "red") {
        console.log("Stop");
    } 
    else if (signal === "yellow") {
        console.log("Ready to go");
    } 
    else if (signal === "green") {
        console.log("Go");
    } else {
        console.log("Invalid input");
    }
}

trafficLight("red");   // Output: Stop
trafficLight("yellow"); // Output: Ready to go
trafficLight("green"); // Output: Go
trafficLight("blue");  // Output: Invalid input

// # add sum 
function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const bill = add(20, 40);
console.log("Total bill is : ", bill);
