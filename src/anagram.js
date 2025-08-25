// check if two strings match
const LETTERS_ONLY_REGEX = /[^a-zA-Z]/g
function anagram(str1, str2){
  if(str1 === str2) return true
  const m1 = charMap(str1)
  const m2 = charMap(str2)
  
  if(m1.size !== m2.size) return false
  
  for (const [key, value] of m1) {
    if (!m2.get(key) || m2.get(key) !== value) return false;
  }
  return true
}

function charMap(str){
  const cleanStr = str.replace(LETTERS_ONLY_REGEX, '').toLowerCase().split('')
  const charMap = new Map()
  for (const c of cleanStr) {
    charMap.set(c, (charMap.get(c) || 0) + 1)
  }
  return charMap
}

console.log(anagram('helloeeee', 'olleH1111___'))