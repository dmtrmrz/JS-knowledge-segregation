const a = {
  x: 1,
  y: 2,
};
const b = Object.assign({}, a);
b.x = 3;
console.log(a, b);
