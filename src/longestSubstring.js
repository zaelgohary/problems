// Given a string s, find the length of the longest substring without repeating characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters/


// function lengthOfLongestSubstring(s){
  // let arr = []
  // let answer = 0;

  // for (let i = 0; i < s.length; i++) {
  //   if (!arr.includes(s[i])) {
  //     arr.push(s[i])
  //     console.log("arr.length", arr.length);
  //     console.log("answer", answer);
  //   } 
  //     console.log("i before", arr.indexOf(s[i]));
  //     i = arr.indexOf(s[i]) || i++;
  //     console.log("i after", arr.indexOf(s[i]));
  //     arr = []
  //   console.log("i outside if", i);
  //   answer = Math.max(answer, arr.length)
  // }

  // return answer;
// }


function lengthOfLongestSubstring(s){
  let arr = []
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) {
      const repeatedIndex = arr.indexOf(s[i]);
      arr = arr.slice(repeatedIndex + 1); // Remove the repeated characters from the arr array
    }

    arr.push(s[i]);
    answer = Math.max(answer, arr.length);
    console.log("arr", arr);
  }

  return answer;
}

const string = "aab";
console.log(lengthOfLongestSubstring(string));

