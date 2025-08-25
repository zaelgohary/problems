function fizzBuzz(n){
 const result = Array.from({length: n}, (v, i) => {
  v = i + 1
  if(v % 3 === 0 && v % 5 === 0) return 'fizzbuzz'
  if(v % 3 === 0) return 'fizz'
  if(v % 5 === 0) return 'buzz'
  return v
 })
 return result
}

console.log(fizzBuzz(15));
