const age = 15;
const isOldEnough = age >= 18;

if(age >= 18) {
    console.log('sarah can start driving license');
}
else {
    const yearLeft = 18 - age;
    console.log(`sarah is too young. wait another ${yearLeft} years :)  `);
}



const birthYear = 2012;
let century;
if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century);