// get max char in a string
function maxChar(str){
  const charMap = new Map();
  let max = 0;
  let maxChar = '';
  for(let char of str){
    charMap[char] = ++charMap[char] || 1;
    if (max < charMap[char]) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxChar('hellooo world'));