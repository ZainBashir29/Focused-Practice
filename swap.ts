// function swap(a: number, b: number): void {
//   let tmp = a;
//   a = b;
//   b = tmp;
// }

let x: number = 1;
let y: number = 2;

console.log(`x is ${x} and y is ${y}`);

// swap(x, y);

[y, x] = [x, y];

console.log(`x is ${x} and y is ${y}`);
