let sentence = 'Education is the key to success';
let vowels = "aeiou";
let found = true;

for(let i = 0; i < vowels.length; i++){
    if (!sentence.toLowerCase().includes(vowels[i])) {
        found = false;
        break;
    }
}

if(found){
    console.log("All vowels are present in the sentence.");
} 
else {
    console.log("All vowels are not present in the sentence.");
}