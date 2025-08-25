// chunk an array into sub arrays
function chunck(arr, size){
  let chuncked = []
  let newArr = []
  for (const e of arr) {
    chuncked.push(e)
    if (chuncked.length === size) {
      newArr.push(chuncked)
      chuncked = []
    }
  }
  if (chuncked.length > 0) {
    newArr.push(chuncked)
  }
  return newArr
}

function chunck2(arr, size){
  const chuncked = []
  let index = 0
  while (index < arr.length) {
    chuncked.push(arr.slice(index, index + size))
    index += size
  }
  return chuncked
}

console.log(chunck2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2));