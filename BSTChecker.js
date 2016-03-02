/*
Write a function to check that a binary tree ↴ is a valid binary search tree;

///////////////// Notes /////////////////////

The simplest ways to traverse the tree are depth-first and breadth-first.
They have the same time cost (they each visit each node once).
Depth-first traversal of a tree uses memory proportional to the depth of
the tree, while breadth-first traversal uses memory proportional to the
breadth of the tree (how many nodes there are on the "level" that has the most nodes).

Because the tree's breadth can as much as double each time it gets
one level deeper, depth-first traversal is likely to be more space-efficient
than breadth-first traversal, though they are strictly both O(n)
additional space in the worst case. The space savings are obvious if
we know our binary tree is balanced—its depth will be O(lgn) and its
breadth will be O(n).

//////////////////// Pseudo Code ///////////////////////////

Input  : <object> node
Output : <boolean>

BST
    => all values in left tree are less than root
    => all values in right tree are greater than root.

function BTChecker (<object> root)
  if (root === null)
    return true;
  if (root.left !== null)
    if (root.left.value >= root.value)
      return false
    else
      var left = BT Checker(root.left);
  if (root.right !== null)
    if (root.right.value <= root.value)
      return false;
    else
      right = BTChecker(root.right);
  if (right === false || left === false)
    return false
  else
    return true;
*/

"use strict";

let BTChecker = (root, mainRoot) => {
    let right, left;
    mainRoot = mainRoot || root.value;
    if (root === null) return true;

    if (root.left !== null) {
      if (root.left.value >= root.value || root.left.value >= mainRoot){
        return false;
      } else {
        left = BTChecker(root.left, mainRoot);
      }
    }

    if (root.right !== null) {
      if (root.right.value <= root.value || root.right.value <= mainRoot) {
        return false;
      } else {
        right = BTChecker(root.right, mainRoot);
      }
    }

    return right === false || left === false ? false : true;
  };


//////////////////// Tests /////////////////////////

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

const BT = new BinaryTreeNode(3);
BT.insertLeft(2);
BT.insertRight(5);
console.log(BTChecker(BT)); // true

const BT2 = new BinaryTreeNode(1);
BT2.insertLeft(2);
BT2.insertRight(5);
console.log(BTChecker(BT2)); // false

const BT3 = new BinaryTreeNode(50);
const BT3Left = BT3.insertLeft(30);
const BT3Right = BT3.insertRight(80);
BT3Left.insertLeft(20);
BT3Left.insertRight(60);
BT3Right.insertLeft(70);
BT3Right.insertRight(90);
console.log(BTChecker(BT3)); // false
