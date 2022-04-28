//Push -- add to the end

const myArray = [1, 2, 3];
console.log(myArray);

myArray.push(4);

console.log(myArray); // [ 1, 2, 3, 4 ]

myArray.push(true);

console.log(myArray); // [ 1, 2, 3, 4, true ]

// Pop -- delete last one

myArray.pop(); // [ 1, 2, 3, 4 ]

console.log(myArray);

const removedElement = myArray.pop();

console.log(myArray); // [1, 2, 3]
console.log(removedElement); // 4

//  Unshift -- add in the begining

myArray.unshift(true);

console.log(myArray); // [ true, 1, 2, 3 ]

// Shift -- delete first array el

myArray.shift();
console.log(myArray); // [ 1, 2, 3 ]
