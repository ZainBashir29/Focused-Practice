function findCharacter(text, target) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] == target) return i;
  }

  return -1;
}

console.log(findCharacter("banana", "b"));
console.log(findCharacter("apple", "z"));
console.log(findCharacter("manousos", "s"));
