const hena = {
    fullName : "Mst Hena Khatun",
    age : 20,
    relationshipStatus : false,
    friends : ['Rohim', 'Korim', 'Joba'],
    fatherName : "Abul",
    motherName : "Asma Khatun",
    100 : "Thousand"
}
console.log(hena);

const name = hena.fullName;
console.log(name);

console.log(hena.friends[1]);

const key = Object.keys(hena); // for print keys
// const key = Object.keys(hena).length;
console.log(key);

const value = Object.values(hena); // print for values
// const value = Object.values(hena).length;
console.log(value);

const henaThousand = hena[100]
console.log(henaThousand );

