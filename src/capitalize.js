// capitalize first letter in a string
function capitalize(str){
  return str.split(' ').map((word) => {
    return c(word)
  }).join(' ')
}

function c(s){
  const upperChar = s.codePointAt(0) - 32
  return String.fromCodePoint(upperChar) + s.slice(1)
}

console.log(capitalize('hello wooo'))