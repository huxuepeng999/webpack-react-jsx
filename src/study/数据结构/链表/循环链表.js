function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.head.next = this.head;
  console.log(this.head);
  this.find = find;
  this.prevFind = prevFind;
  this.insert = insert;
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

function insert(element, item) {
  let newNode = new Node(element);
  let currNode = this.find(item);
  newNode.next = currNode.next;
  currNode.next = newNode;
}

function prevFind(item) {
  let currNode = new Node(item);
  while (currNode.next.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(element) {
  let currNode = this.prevNode(element);
  if (currNode.next !== null) {
    currNode.next = currNode.next.next;
  }
}

function display() {
  let currNode = this.head;
  console.log(currNode);
  while (currNode.next !== null && currNode.next.element !== "head") {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
  //   console.log(this.head);
  //   console.log(currNode);
}

let cities = new LList();
cities.insert("b", "head");
cities.insert("c", "b");
cities.insert("d", "c");
cities.display();
console.log("----------");
