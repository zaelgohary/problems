// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

function* isPalindrome(s) {
  if(typeof s !== "string") return false;
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  if (cleaned.length === 0) return true;
  let left = 0;
  let right = cleaned.length - 1;
  while(left < right) {
    if (cleaned[right] !== cleaned[left]) return false;
    left++
    right--
  }
  return true
}

console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(""));
console.log(isPalindrome("A man a plan a canal Panama"));

const arr = [1, 2, 3, 4];
console.log(arr.reduce((cur, acc) => cur + acc, 0));

const seq = isPalindrome("Was it a car or a cat I saw?");
console.log(seq.next().value);


JSON.parse(JSON.stringify(obj));