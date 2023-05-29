const str = prompt("enter tour text:").toUpperCase;
let massage = countLetters(str);
alert (massage)
function countLetters(str) {
    const letterCounts = {};
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
    if (!letter.match(/[A-Z]/)) {
        continue;
        }
    if (letterCounts[letter]) {
        letterCounts[letter]++;}
    else {
        letterCounts[letter] = 1;
        }
}
// Convert the letterCounts object to an array of objects
const result = Object.keys(letterCounts).map((letter) => ({
    letter,
    amount: letterCounts[letter]
  }));

  result.sort((a, b) => a.letter.localeCompare(b.letter));

  return result;
}
//const text = [
//    {letter , amount }
//]
