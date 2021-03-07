// Implement Quick Sort
// Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive
// divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array.
// The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then
// combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the
// base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls
// return us the sorted array.

// Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively
// easy to implement. These attributes make it a popular and useful sorting method.

// Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these
// integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will
// do for our purposes here. For simplicity, the first or last element could be used.

function swap(array, first, second) {
  const temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

function partition(array, left, right) {
  let pivot = array[Math.floor(Math.random() * (right - left + 1)) + left];

  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (array.length < 2) {
    return array;
  }

  const index = partition(array, left, right);

  if (left < index - 1) {
    quickSort(array, left, index - 1);
  }

  if (right > index) {
    quickSort(array, index, right);
  }

  return array;
}

const test = [
  1,
  4,
  2,
  8,
  345,
  123,
  43,
  32,
  5643,
  63,
  123,
  43,
  2,
  55,
  1,
  234,
  92,
];
console.log(quickSort(test));
