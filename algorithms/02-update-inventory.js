// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh
// delivery. Update the current existing inventory item quantities (in arr1). If an item cannot
// be found, add the new item and quantity into the inventory array. The returned inventory array
// should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
  // check to make sure arr1 or arr2 is not blank
  if (arr1.length < 1) {
    return sortInventory(arr2);
  }
  if (arr2.length < 1) {
    return sortInventory(arr1);
  }
  let inventory = arr1; // use arr1 as reference point
  for (let i = 0; i < arr2.length; i++) {
    let index = findIndexOfName(inventory[i][1], arr2); // name is 2nd element in 2D array
    if (index === undefined) {
      inventory.push(arr2[i]);
    } else {
      inventory[i][0] += arr2[i][0];
    }
  }

  return sortInventory(inventory);

  function findIndexOfName(name, array) {
    for (let j = 0; j < arr2.length; j++) {
      if (name === arr2[j][1]) {
        return j;
      }
    }
    return undefined;
  }

  function sortInventory(array) {
    return array.sort((a, b) => {
      return a[1] > b[1] ? 1 : -1;
    });
  }
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
