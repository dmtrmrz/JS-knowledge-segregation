//  destructured assignment

// Object

const userProfile = {
  name: "Dzmitry",
  commentQty: 26,
  hasSignedAgreement: false,
};

const { name, commentQty } = userProfile;
const { hasSignedAgreement } = userProfile;

console.log(name); // Dzmitry
console.log(commentQty); // 26

// Array

const fruits = ["Apple", "Banana"];
const [fruitX, fruitY] = fruits;

console.log(fruitX); // Apple
console.log(fruitY); // Banana
