function Node(val){
  this.root = val;
  this.left = null;
  this.right = null;
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const dfs = function(root){
  const list = [];
  const stack = [root]
  while(stack.length>0){
    const curr = stack.pop();
    list.push(curr.root);
    if(curr.right) stack.push(curr.right);
    if(curr.left) stack.push(curr.left)
  }
  return list;
}

console.log(dfs(a))