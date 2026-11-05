function longestWord(sentence) {
  let words = [];

  let word = "";

  for (let i = 0; i < sentence.length; i++) {
    word += sentence[i];

    if (sentence[i] == " " || sentence[i + 1] == null) {
      if (sentence[i] == " ") {
        words.push(word.slice(0, word.length - 1));
      } else {
        words.push(word);
      }
      word = "";
    }
  }

  let longest = words[0];

  for (let j = 1; j < words.length; j++) {
    const current = words[j];
    if (longest.length < current.length) {
      longest = current;
    }
  }

  return longest || "";
}

console.log(longestWord("I love JavaScript"));
console.log(longestWord("one two six"));
console.log(longestWord(""));
console.log(longestWord("hello world"));
console.log(longestWord(" cat "));
