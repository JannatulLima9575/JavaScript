console.log("AM/PM Detector");
let hour = 15;
let timePeriod;

if (hour >= 0 && hour < 12) {
    timePeriod = "AM";
} else if (hour >= 12 && hour < 24) {
    timePeriod = "PM";
} else {
    timePeriod = "Invalid Hour!";
}

console.log("Time Period:", timePeriod);
