// 5 types of false value are 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('daniel'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100
if(money) {
    console.log("don't spend it all");
}
else {
    console.log('you should get a job');
}


let height;
if(height) {
    console.log('height is define');
}
else {
    console.log('height is undefined ');
}