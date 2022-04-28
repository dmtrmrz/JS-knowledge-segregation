//  IF

let val = 10;

if (val > 5) {
  val += 20;
}

console.log(val); // 30

const person = {
  age: 20,
};

if (!person.name) {
  console.log("Имя не указано");
}

// IF ELSE

let num = 10;
if (num < 5) {
  num += 20;
} else {
  num -= 20;
}

console.log(num);

// If else if else
const age = 7;

if (age > 18) {
  console.log("Adult");
} else if (age >= 12) {
  console.log("Teenager");
} else {
  console.log("Child");
}
// replace with IF

const age2 = 25;

if (age2 >= 18) {
  console.log("Adult");
}
if (age2 >= 12 && age2 < 18) {
  console.log("Teenager");
}
if (age2 < 12) {
  console.log("Child");
}

//  Function

const sumPositiveNumbers = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "One of the arguments is not a number";
  }
  if (a <= 0 || b <= 0) {
    return "Numbers are not a positive";
  }
  return a + b;
};

console.log(sumPositiveNumbers(5, true));

// Switch

const month = 2;

switch (month) {
  case 12:
    console.log("Декабрь");
    break;
  case 1:
    console.log("Январь");
    break;
  case 2:
    console.log("Февраль");
    break;
  default:
    console.log("Это не зимний месяц");
}
