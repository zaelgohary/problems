// Sort an arr based on another arr elements
var relativeSortArray = function(arr1, arr2) {
  const orderMap = new Map();
  arr2.map((v, i) => orderMap.set(v, i));
  arr1.sort((a, b) => {
    const aVal = orderMap.get(a) ?? a + 1001;
    const bVal = orderMap.get(b) ?? b + 1001;
    return aVal - bVal;
  });
  return arr1;
};
console.log(relativeSortArray([7, 5, 2, 9], [5, 2]));