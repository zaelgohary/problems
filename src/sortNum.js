// Dutch National Flag Algo
//  a[mid] = 0 ?? swap(a[mid], a[low]) && low++, mid++
//  a[mid] = 1 ??  mid++
//  a[mid] = 2 ?? swap(a[mid], a[high]) && mid++, high--


function sortNum(arr) {
  let low = 0
  let mid = 0
  let high = arr.length -1

  while(mid <= high){
    if (arr[mid] === 0) {
      swap(nums, low, mid)
      low++
      mid++
    } else if (arr[mid] === 2){
      swap(nums, high, mid)
      high--  
    } else{
     mid++ 
    }
  }
  return arr;
};

function swap(arr, i, j){
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

const nums = [2,0,2,1,1,0]
console.log(sortNum(nums));