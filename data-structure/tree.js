class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      let currentNode = this.root;
      const newNode = new Node(value);
      while (true) {
        if (currentNode.value > newNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  //Node has 1 child , or node has either left or right child
  remove(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        if (!currentNode.left && !currentNode.right) {
          if (parentNode.left === currentNode) {
            parentNode.left = null;
          } else {
            parentNode.right = null;
          }
        } else if (currentNode.left || currentNode.right) {
          if (currentNode.left) {
            currentNode = currentNode.left;
            parentNode.left = currentNode;
          } else {
            currentNode = currentNode.right;
            parentNode.right = currentNode;
          }
        }
      } else if (currentNode.value > value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree(6);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(9);
tree.insert(12);
// console.log(traverse(tree.root));
// console.log(tree.lookup(28));
// tree.remove(3);
// console.log(tree);
console.log(tree.breadthFirstSearch());
