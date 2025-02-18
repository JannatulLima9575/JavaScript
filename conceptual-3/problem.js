// problem-1 

function bazarHisab (totalMoney, morich, mach, shobji) {
    let totalCost = morich + mach + shobji;
    let remainderManey = totalMoney - totalCost;
    return remainderManey;
}

// let totalMoney = 500;
// let morich = 100;
// let mach = 200;
// let shobji = 50;

// let restMoney = bazarHisab(totalMoney, morich, mach, shobji);
let restMoney = bazarHisab(500, 100, 200, 50);
console.log(restMoney);
