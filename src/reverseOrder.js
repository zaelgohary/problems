function reverse(s) {
  let reversed = ''
  s.split('').map((c) => reversed = c + reversed)
  return reversed;
}

function reverse2(s){
  return s.split('').reverse().join('');
}

function reverseInt(num){  
  return parseInt(reverse(num.toString())) * Math.sign(num)
}

console.log(reverseInt(-1234));