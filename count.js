function countCharacters(text) {
  if (typeof text != "string") return new Error("Text should be a string");
  return text.length;
}

console.log(countCharacters("hello"));
console.log(countCharacters(""));
console.log(countCharacters(" "));
console.log(countCharacters(32));
