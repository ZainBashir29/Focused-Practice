function countCharacter(text, target) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == target) {
      count++;
    }
  }
  return count;
}

console.log(countCharacter("banana", "a"));
console.log(countCharacter("apple", "p"));
console.log(countCharacter("zebra", "b"));
console.log(countCharacter("monkey", "p"));
