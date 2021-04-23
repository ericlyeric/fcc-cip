// Create a Priority Queue Class
// In this challenge you will be creating a Priority Queue. A Priority Queue is a special type of Queue in which items
// may have additional information which specifies their priority. This could be simply represented with an integer.
// Item priority will override placement order in determining the sequence items are dequeued. If an item with a higher
// priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.

// We’ve started writing a PriorityQueue in the code editor. You will need to add an enqueue method for adding items
// with a priority, a dequeue method for removing and returning items, a size method to return the number of items
// in the queue, a front method to return the element at the front of the queue, and finally an isEmpty method that
// will return true if the queue is empty or false if it is not.

// The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. dequeue
// and front should return only the item's name, not its priority.

function PriorityQueue() {
  this.collection = [];
  this.printColelction = function () {
    console.log(this.collection);
  };

  this.enqueue = function (newItem) {
    if (this.isEmpty()) {
      return this.collection.push(newItem);
    }
    var contain = false;
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][1] > newItem[1]) {
        this.collection.splice(i, 0, newItem);
        contain = true;
        break;
      }
    }
    if (!contain) {
      return this.collection.push(newItem);
    }
  };

  this.dequeue = function () {
    return this.collection.shift()[0];
  };

  this.size = function () {
    return this.collection.length;
  };

  this.front = function () {
    return this.collection[0][0];
  };

  this.isEmpty = function () {
    return this.size() < 1;
  };
}
