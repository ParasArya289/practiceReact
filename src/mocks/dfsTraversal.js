function Node(val) {
  this.root = val;
  this.left = null;
  this.right = null;
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const dfs = function (root) {
  const list = [];
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    list.push(curr.root);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return list;
};

const dfsRecursive = function (root) {
  if (root === null) return [];
  const leftSubtree = dfsRecursive(root.left);
  const rightSubtree = dfsRecursive(root.right);
  console.log({ leftSubtree, rightSubtree });
  return [root.root, ...leftSubtree, ...rightSubtree];
};

// console.log(dfs(a))

const bfs = function (root) {
  if (root === null) return [];
  const res = [];
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();

    res.push(curr.root);
    if (curr.left !== null) queue.push(curr.left);
    if (curr.right !== null) queue.push(curr.right);
  }
  return res;
};

const serpentineTree = function (root) {
  if (root === null) return [];

  const res = [];
  let level = 1;
  const queue = [root];

  while (queue.length > 0) {
    const levelNodes = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const curr = queue.shift();
      // console.log(curr.root)
      levelNodes.push(curr.root);

      if (curr.left != null) {
        queue.push(curr.left);
      }

      if (curr.right != null) {
        queue.push(curr.right);
      }
    }

    if (level % 2 === 0) {
      levelNodes.reverse();
    }

    res.push(...levelNodes);
    level++;
  }
  console.log(level);
  return res;
};
// console.log(serpentineTree(a));
