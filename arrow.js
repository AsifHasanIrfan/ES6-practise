// function doubleIt(num){
//     return num *2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

// single parameter arrow function //
const doubleIt = num =>  num * 2;

// multiple parameter arrow function //
const add = (x, y) => x + y;

// no parameter arrow function //
const give = () => 5;

const result = add(10, 42);
console.log(result);