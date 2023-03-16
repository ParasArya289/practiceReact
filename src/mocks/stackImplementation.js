//-------------STACK----------//
function Stack(){
  this.stack = [];
}
Stack.prototype.size = function(){
  return this.stack.length();
}
Stack.prototype.push = function(value){
  return this.stack.push(value);
}
Stack.prototype.pop = function(){
  return this.stack.pop();
}
Stack.prototype.peek = function(){
  return this.stack.at(-1);
}

const myStack = new Stack();
myStack.push('Paras');
myStack.push('Arya');
myStack.pop()
console.log(myStack.peek())
console.log(myStack)