/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.

function preOrder(node)
{
if (node == undefined) {
    return [];
  }
  let result = [node.data]; 
  
  if (node.left !== undefined) {
    result = [...result,...preOrder(node.left)]
  } 
  
  if (node.right !== undefined) {
    result = [...result,...preOrder(node.right)];
  }
  
  return result; 
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node)
{
 if (node == undefined) {
    return [];
  }
  let result = [];
  
  if (node.left != undefined) {
    result = [...result,...inOrder(node.left)]
  }
  
  result.push(node.data);
  
  if (node.right != undefined) {
    result = [...result,...inOrder(node.right)]
  }
  
  return result;
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node)
{
   if (node == undefined) {
    return [];
  }
  
  let result = [];
  
  if (node.left != undefined) {
    result = [...result,...postOrder(node.left)]
  }
  
  if (node.right != undefined) {
    result = [...result,...postOrder(node.right)]
  }
  
  result.push(node.data);
  
  return result;
}