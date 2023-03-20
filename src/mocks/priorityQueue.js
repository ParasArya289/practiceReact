function PriorityQueue() {
  this.collection = [];
}

PriorityQueue.prototype.size = function () {
  return this.collection.length;
};
PriorityQueue.prototype.isEmpty = function () {
  if (this.collection.length === 0) {
    return true;
  }
  return false;
};

PriorityQueue.prototype.enqueue = function (element) {
  let added = false;
  if (this.collection.length === 0) {
    this.collection.push(element);
  } else {
    for (let i = 0; i < this.collection.length; i++) {
      if (element[1] > this.collection[i][1]) {
        this.collection.splice(i, 0, element);
        added = true;
        break;
      }
    }
  }
  if (!added) {
    this.collection.push(element);
  }
};
PriorityQueue.prototype.dequeue = function () {
  if (!this.isEmpty()) {
    const dequeuedValue = this.collection.shift();
    return dequeuedValue[0];
  }
  return this.collection;
};
PriorityQueue.prototype.front = function () {
  return this.collection[0];
};
PriorityQueue.prototype.back = function () {
  return this.collection.at(-1);
};

const myPriorityQueue = new PriorityQueue();
myPriorityQueue.enqueue(["paras", 1]);
myPriorityQueue.enqueue(["arya", 2]);
myPriorityQueue.enqueue(["manish", 0]);
console.log(myPriorityQueue);
myPriorityQueue.dequeue();
myPriorityQueue.dequeue();
myPriorityQueue.dequeue();
myPriorityQueue.dequeue();
console.log(myPriorityQueue.dequeue());

console.log(myPriorityQueue);
