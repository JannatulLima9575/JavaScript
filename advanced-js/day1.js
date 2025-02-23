// stack variables  
function something() {
    let a = 10;

    return function(b) {
        return b * a;
    }
}

const result = something();
const finalResult = result(100);
console.log(finalResult);