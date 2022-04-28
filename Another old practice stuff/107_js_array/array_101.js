const myArray = [1, 2, 3]; //1,2,3
console.log(myArray);

const myArray2 = new Array(1, 2, 3); //1,2,3

console.log(myArray2);

myArray2 === myArray; //false //different links

const myArray3 = myArray;

myArray3 === myArray; //true

const newArray = [1, true, "a"];
console.log(newArray); // [1, true, 'a']

console.log(newArray[0]); // 1
console.log(newArray[1]); // true
console.log(newArray[2]); // a
console.log(newArray.length); // 3

// newArray.length = 7;

// myArray; //[1, true, 'a', empty x 4]

newArray[2] = "b";

console.log(newArray); //[ 1, true, 'b' ]

newArray[3] = 10;

console.log(newArray); //[ 1, true, 'b', 10 ]
