// Return the number of total permutations of the provided string that don't have repeated consecutive
// letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
// but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
function getPermutations(array) {
  const output = [];

  generatePermutations(array.length, [...array]);

  return output;

  function swap(swapArray, firstIndex, secondIndex) {
    const temp = swapArray[firstIndex];
    swapArray[firstIndex] = swapArray[secondIndex];
    swapArray[secondIndex] = temp;
  }

  function generatePermutations(n, heapArray) {
    if (n === 1) {
      return output.push([...heapArray]);
    }

    generatePermutations(n - 1, heapArray);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swap(heapArray, i, n - 1);
      } else {
        swap(heapArray, 0, n - 1);
      }
      generatePermutations(n - 1, heapArray);
    }
  }
}

function permAlone(str) {
  let regex = /(.)\1+/;
  const permutations = getPermutations(str).map((perm) => perm.join(""));

  return permutations.filter((perm) => {
    return !perm.match(regex);
  }).length;
}

console.log(permAlone("aaabb"));
