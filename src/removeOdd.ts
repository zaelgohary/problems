https://leetcode.com/discuss/interview-question/887027/microsoft-oa-2020-min-deletions-to-obtain-a-word-with-even-character-occurrences

function removeOdd(S: string): number {
  const counter : number[] = new Array(26).fill(0);
  for(let i = 0; i < S.length; i++){
      counter[S.charCodeAt(i) - "a".charCodeAt(0)]++
  }

  let removedNum = 0;

  for(let i = 0; i < counter.length; i++){
      if(counter[i] %2 === 1){
          removedNum++
      }
  }

  return removedNum;
}