// 添加，删除，查找都非常快
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

// bst: 二叉查找树
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}
/**
 * 1.设跟节点为当前节点
 * 2.如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点；反之，执行步骤4
 * 3.如果当前节点的左节点为null，就将新的节点插入这个值，退出循环；反之，继续执行下一次循环
 * 4.设新的当前节点为原节点的右节点
 * 5.如果当前节点的右节点为null，就将新的节点插入这个值，退出循环；反之，继续执行下一次循环
 * @param {*} data
 */
function insert(data) {
  let n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    let current = this.root;
    let parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

// 中序遍历
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.show() + "");
    inOrder(node.right);
  }
}

// 中序遍历
function preOrder(node) {
  if (node !== null) {
    console.log(node.show() + "");
    preOrder(node.left);
    preOrder(node.right);
  }
}

// 后序遍历
function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + "");
  }
}

// 查找最小值
function getMin() {
  let current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}

// 查找最大值
function getMax() {
  let current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
}

// 查找给定值
function getFind(data) {
  let current = this.root;
  while (current !== null) {
    if (current.data === data) {
      return current;
    } else if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

// 删除带有子节点的节点最为复杂
function remove(data) {
  this.root = removeNode(this.root, data);
}
function getSmallData(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}
function removeNode(node, data) {
  if (node === null) {
    return node;
  }
  if (data === node.data) {
    // 没有子节点的节点
    if (node.left === null && node.right === null) {
      return null;
    }
    // 没有左子节点，直接指向他的子节点
    if (node.left === null) {
      return node.right;
    }
    // 没有右子节点，直接指向他的子节点
    if (node.right === null) {
      return node.left; // null 直接删除该节点
    }
    // 有两个子节点的节点
    let tempData = getSmallData(node.right);
    // 右节点的最小值替换当前节点，或：左节点的最大值替换当前节点
    node.data = tempData.data;
    // 移除右节点的最小值
    node.right = removeNode(node.right, tempData.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
console.log("--------");
// preOrder(nums.root)
// console.log('--------')
// postOrder(nums.root)

// nums.remove(16)
// nums.inOrder(nums.root)

remove.call(nums, 45);
console.log("res===nums", nums);
inOrder(nums.root);
