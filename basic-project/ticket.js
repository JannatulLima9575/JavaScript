// Movie Ticket Price System
let age = 15;
let ticketPrice;

if (age < 5) {
    ticketPrice = "Free";
} else if (age >= 5 && age <= 12) {
    ticketPrice = "50৳";
} else if (age >= 13 && age <= 18) {
    ticketPrice = "80৳";
} else {
    ticketPrice = "100৳";
}

console.log("Ticket Price:", ticketPrice);
