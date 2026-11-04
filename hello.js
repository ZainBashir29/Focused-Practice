function sayHello(name) {
  if (!name) return new Error("Name is required");
  else if (typeof name != "string") return new Error("Name should be a string");
  else if (name.trim() == "") return new Error("Name is required");

  return `Hello, ${name.trim()}!`;
}

console.log(sayHello(42));
console.log(sayHello(null));

// console.log(sayHello(" Mina "));
// console.log(sayHello(""));
// console.log(sayHello(" "));
// console.log(sayHello("  "));
// console.log(sayHello(""));
// console.log(sayHello(42));
