/**
 * // 一、数组的特点
// 1.在内存中，数组是一块连续的区域
// 2.数组需要预留空间
// 在使用前需要提前申请所占内存的大小，这样不知道需要多大的空间，就预先申请可能会浪费内存空间，即数组空间利用率低
// ps：数组的空间在编译阶段就需要进行确定，所以需要提前给出数组空间的大小（在运行阶段是不允许改变的）

// 3.在数组起始位置处，插入数据和删除数据效率低。
// 插入数据时，待插入位置的的元素和它后面的所有元素都需要向后搬移
// 删除数据时，待删除位置后面的所有元素都需要向前搬移

// 4.随机访问效率很高，时间复杂度可以达到O(1)
// 因为数组的内存是连续的，想要访问那个元素，直接从数组的首地址处向后偏移就可以访问到了

// 5.数组开辟的空间，在不够使用的时候需要扩容，扩容的话，就会涉及到需要把旧数组中的所有元素向新数组中搬移
// 6.数组的空间是从栈分配的

// 二、数组的优点
// 随机访问性强，查找速度快，时间复杂度为O(1)

// 三、数组的缺点
// 1.头插和头删的效率低，时间复杂度为O(N)
// 2.空间利用率不高
// 3.内存空间要求高，必须有足够的连续的内存空间
// 4.数组空间的大小固定，不能动态拓展
 */
// 链表
// 一、链表的特点
// 1.在内存中，元素的空间可以在任意地方，空间是分散的，不需要连续
// 2.链表中的元素都会两个属性，一个是元素的值，另一个是指针，此指针标记了下一个元素的地址
// 每一个数据都会保存下一个数据的内存的地址，通过此地址可以找到下一个数据

// 3.查找数据时效率低, 时间复杂度为O(N)
// 因为链表的空间是分散的，所以不具有随机访问性，如要需要访问某个位置的数据，需要从第一个数据开始找起，依次往后遍历，直到找到待查询的位置，故可能在查找某个元素时，时间复杂度达到O(N)

// 4.空间不需要提前指定大小，是动态申请的，根据需求动态的申请和删除内存空间，扩展方便，故空间的利用率较高
// 5.任意位置插入元素和删除元素效率较高，时间复杂度为O(1)
// 6.链表的空间是从堆中分配的


// 二、链表的优点
// 1.任意位置插入元素和删除元素的速度快，时间复杂度为O(1)
// 2.内存利用率高，不会浪费内存
// 3.链表的空间大小不固定，可以动态拓展


// 三、链表的缺点
// 随机访问效率低，时间复杂度为0(N)
/**
 * 
 */
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
