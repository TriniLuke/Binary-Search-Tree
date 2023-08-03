// BST Balanced Binary Search Tree

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null
  }

  insertNode(root, newNode) {
    if(newNode.data < root.data) {
      if(root.left === null) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if(root.right === null) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }

  insert(data) {
    const newNode = new Node(data)
    if(this.isEmpty()) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  buildTree(arr) {
    let sortedArray = arr.sort((a, b) => a - b)
    let uniqueSorted = new Set(sortedArray)
    let uniqueSortedArray = Array.from(uniqueSorted)

    let rootNode = uniqueSortedArray[Math.floor((uniqueSortedArray.length - 1) / 2)]

    this.insert(rootNode)

    uniqueSortedArray.forEach(node => {
      if(rootNode === node) return
      this.insert(node)
    })
    return rootNode
  }

  min(node) {
    while(!node.left === null) {
      node.node.left
      
      return node
    }
  }

  delete(data) {
    this.root = this.deleteNode(this.root,  data)
  }

  deleteNode(root, data) {
    if(root === null) return root

    if(data === root.data) {
      if(root.left === null && root.right === null) {
        return null
      } else if(root.left === null) {
        return root.right
      } else if(root.right === null) {
        return root.left
      } else {
        let temp = this.min(root.right)
        root.data = temp.data
        root.right = this.deleteNode(root.right, temp.data)
        return root
      }
    } else if(data < root.data) {
      root.left = this.deleteNode(root.left, data)
      return root
    } else {
      root.right = this.deleteNode(root.right, data)
      return root
    }
  }

  find(root, value) {
    if(!root) return 'Data does not exist.'
    
    if(root.data === value) return value

    if(value < root.data) {
        return this.find(root.left, value)
    } else {
        return this.find(root.right, value)
    }
  }

  levelOrder() {
    const stack = []
    stack.push(this.root)
    
    while(stack.length) {
      let curr = stack.shift()
      console.log(curr.data)
      if(curr.left) {
        stack.push(curr.left)
      }
      if(curr.right) {
        stack.push(curr.right)
      }
    }
  }

  preOrder(root) {
    if(root) {
      console.log(root.data)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  inOrder(root) {
    if(root) {
      this.inOrder(root.left)
      console.log(root.data)
      this.inOrder(root.right)
    }
  }

  postOrder(root) {
    if(root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.data)
    }
  }

  height(root) {
    if(root === null || (root.left === null && root.right === null)) return 0

    let leftHeight = this.height(root.left)
    let rightHeight = this.height(root.right)

    if(leftHeight > rightHeight) {
      return Math.max(leftHeight + 1)
    } else {
      return Math.max(rightHeight + 1)
    }
    
  }

  depth(root) {
    root
  ? 1 + Math.max(this.depth(root.left), this.depth(root.right))
  : 0
  }

  isBalanced(root) {
    if(this.isEmpty()) return

    if((root.left - root.right) > 1) {
      console.log('false')
      return false
    }
    console.log('true')
    return true
  }

  reBalanced() {
    if(!this.isBalanced()) {
      let arr = this.preOrder(this.root)
      console.log('Tree was rebalanced')
      return this.buildTree(arr)
    }
  }
}


// Testing scenarios

const bst = new Tree;
console.log('Tree empty? ', bst.isEmpty())

console.log(bst.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]))

console.log('Tree empty? ', bst.isEmpty())
bst.levelOrder(bst.root)
bst.isBalanced(bst.root)
bst.insert(-50)
bst.insert(-60)
bst.isBalanced(bst.root)
bst.levelOrder(bst.root)
bst.depth(bst.root)

