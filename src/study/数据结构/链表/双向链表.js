function Node(element) {
  this.element = element;
  this.next = null;
  this.prev = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findLast = findLast;
  this.display = display;
  this.displayReverse = displayReverse;
}

function find(item) {
  let currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  newNode.prev = current;
  current.next = newNode;
}

// 双向链表的remove方法比单向链表更高效，因为不用去查找前面节点了
function remove(item) {
  let current = this.find(item);
  while (current.next !== null) {
    current.prev.next = current.next;
    current.next.prev = current.prev;
    current.next = null;
    current.prev = null;
  }
}

function display() {
  let currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findLast() {
  let currNode = this.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

// 反序显示双向列表元素
function displayReverse() {
  let currNode = this.head;
  currNode = this.findLast();
  while (currNode.prev !== null) {
    console.log(currNode.element);
    currNode = currNode.prev;
  }
}

let cities = new LList();
cities.insert("a", "head");
cities.insert("b", "a");
cities.insert("c", "b");
cities.insert("d", "c");
cities.display();
console.log("--------");
cities.remove("c");
cities.display();
console.log("--------");
cities.displayReverse();
