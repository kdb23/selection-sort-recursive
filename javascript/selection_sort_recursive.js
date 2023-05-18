function selectionSortRecursive(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const min = Math.min(...arr);
  const minIndex = arr.indexOf(min);

  arr.splice(minIndex, 1);

  const sorted = selectionSortRecursive(arr)
  return [min, ...sorted]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
