for (let i = 0; i < 5; i++) {
  console.log(i);
}

// перебор в массивах

const myArray = ["first", "second", "third"];

myArray.forEach((element, index) => {
  console.log(element, index);
});

//  While

let b = 5;
while (b < 10) {
  console.log(b);
  b++;
}

// DO while

let f = 10;
do {
  console.log(f);
  f++;
} while (f < 15);

let ff = 15;
do {
  console.log(ff);
  ff++;
} while (ff < 15);

// FOR IN for objects

const myObject = {
  x: 10,
  y: true,
  z: "abc",
};

for (const key in myObject) {
  console.log(key, myObject[key]);
}

Object.keys(myObject).forEach((key) => {
  console.log(key, myObject[key]);
});

Object.values(myObject).forEach((value) => {
  console.log(value);
});

// FOR OF for strings (not for objects, not recomended for arrays)
const myString = "Hey";
for (const letter of myString) {
  console.log(letter);
}
