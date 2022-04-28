//  forEach

const myArray = [1, 2, 3]; // [ 1, 2, 3 ]
console.log(myArray);

const res = myArray.forEach((el) => console.log(el * 2));
// 2
// 4
// 6

console.log(res); // undefined
console.log(myArray); // [ 1, 2, 3 ] -- no changes

//  map

const newArray = myArray.map((el) => el * 3);
// const newArray = myArray.map((el) => {return el * 3});


console.log(newArray); // [ 3, 6, 9 ] -- creates new array
console.log(myArray); // [ 1, 2, 3 ] -- no changes
