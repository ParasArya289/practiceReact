//Queue implementation with Linked list
function Queue() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(el) {
  this.value = el;
  this.next = null;
}

Queue.prototype.size = function () {
  return this.length;
};

Queue.prototype.enqueue = function (el) {
  const node = new Node(el);
  if (this.tail === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
  return this.length;
};

Queue.prototype.dequeue = function () {
  if (this.head === null) {
    return undefined;
  }
  const value = this.head.value;
  this.head = this.head.next;
  if (this.head === null) {
    this.tail = null;
  }
  this.length--;
  return value;
};
