// https://leetcode.com/problems/sort-the-people/

// selection sorting
// mark 1st index as min
// loop over the array and compare min & all other indexes and change min accordingly
// replace indexes of min and the chosen index
// repeat then the array will be sorted
// swap if minIndex changed to j

function swap(arr, i, j){
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

var sortPeople = function(names, heights) {
  for (let i = 0; i < heights.length; i++) {
    let minIndex = i;
  
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] > heights[minIndex]) {
        minIndex = j
      }
    }
  
    // return would change if we didn't swap heights before swapping names
    if (minIndex !== i) {
      swap(heights, minIndex, i)
      swap(names, minIndex, i)
    }
  }

  return names
};

const names = ["IEO","Sgizfdfrims","QTASHKQ","Vk","RPJOFYZUBFSIYp","EPCFFt","VOYGWWNCf","WSpmqvb"]
const heights = [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224]

sortPeople(names, heights)