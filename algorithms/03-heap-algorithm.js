// Heap's algorithm generates all possible permutations of n objects. [1] The algorithm minimizes
// movement: it generates each permutation from the previous one by interchanging a single pair
// of elements; the other n−2 elements are not disturbed.

function countPermutations(array) {
  const output = [];

  function swap(arrayToSwap, firstIndex, secondIndex) {
    const temp = arrayToSwap[firstIndex];
    arrayToSwap[firstIndex] = arrayToSwap[secondIndex];
    arrayToSwap[secondIndex] = temp;
  }

  function generate(n, heapArray) {
    if (n === 1) {
      return output.push([...heapArray]);
    }

    generate(n - 1, heapArray);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swap(heapArray, i, n - 1);
      } else {
        swap(heapArray, 0, n - 1);
      }
      generate(n - 1, heapArray);
    }
  }

  generate(array.length, [...array]);

  return output;
}

console.log(countPermutations([1, 2, 3]));
