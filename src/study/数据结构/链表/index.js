function Node(element) {
  this.element = element;
  this.next = null;
}
// 插入和删除很快
function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.findPrev = findPrev;
  this.remove = remove;
  this.display = display;
}

function find(item) {
  let currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  const newNode = new Node(newElement);
  const current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

// 查找上一个节点
function findPrev(element) {
  let currNode = this.head;
  while (currNode.next.element !== element) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(element) {
  let currNode = this.findPrev(element);
  if (currNode.next !== null) {
    currNode.next = currNode.next.next;
  }
}

function display() {
  let currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

let cities = new LList();
cities.insert("b", "head");
cities.insert("c", "b");
cities.insert("d", "c");
cities.display();
console.log("-----");
cities.remove("c");
cities.display();
