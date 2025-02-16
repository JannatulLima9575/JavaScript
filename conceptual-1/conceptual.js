// # type conversion (parsefloat use for decimal and paesrInt use for integer)
var num1 = "300";
var num2 =100;
var convertNumber = parseInt(num1);
var result = convertNumber + num2;
console.log(result);

// # if-else (|| = or, $$ = and)
let balance = 1000;

if(balance > 5000) {
    console.log("I want to go park");   
}
else if(balance > 15000) {
    console.log("I want to go Cox's bazar");  
}
else {
    console.log("I will go to Coffee shop");   
}

// # nested = vitore
// # simple example
var tamanna = "Bangladesh";

if(tamanna == "Bangladesh") {
    console.log("Give me your address, i will come to Bangladesh"); 
}
else if(tamanna == "India") {
    console.log("India is big, where are you?");   
}
else{
    console.log("I will go to Gazipur"); 
}

var tamanna = "Bangladesh";

if(tamanna == "Bangladesh") {
    if(tamanna === "sunamgong") {
        console.log("please boin Sylhet ay");
    }
    else {
        console.log("Tamanna aito na bcz becharir bibaho hoye gase!");
    }
}
else if(tamanna == "India") {
    console.log("India is big, where are you?");   
}
else{
    console.log("I will go to Gazipur"); 
}

// # fun code with nested if else 

let groom = "Sultan";
let groomJob = "Gov";
let salary = 50000;

if (groom == "Sultan"){
    if (groomJob == "Gov") {
        console.log("Alhamdulillah find a good Boy");
    }
    else {
        console.log("Not a Gov employee");
        
    }
}
else {
    console.log("Not found a good boy");
    
}