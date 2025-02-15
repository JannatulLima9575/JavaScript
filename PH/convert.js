// # convert inchToFeet 
function inchToFeet(inch) {
    const feet = inch / 12 ;
    return feet;
}
const limaHeight = inchToFeet(75);
console.log(limaHeight);

function inchToFeet2(inch) {
    const feetFraction = inch / 12 ;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result =  feetNumber + ' ft '  + inchRemaining + ' inch. '
    return result;
}
const jannatHeight = inchToFeet2(75);
console.log(jannatHeight);

// # Mile To Kilometer 
function mileToKilometer (mile) {
    const kilo = mile * 1.609344;
    return kilo;
}
const speed = mileToKilometer(2);
console.log(speed);

// # Kilometer To  mile
function kilometerToMile (Kilometer) {
    const mile = Kilometer * 0.621371192 ;
    return mile;
}
const speed2 = kilometerToMile (2);
console.log(speed2);
