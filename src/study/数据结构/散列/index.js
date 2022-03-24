// 在散列表上插入、删除和取用数据都非常快，但是对于查找操作来说却效率低下，比如查找一组数据中的最大值和最小值
function HashTable() {
    this.table = new Array(137);    // 必须是质数
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;   // 显示数据
    this.put = put; // 存入数据
    //this.get = get;
}

// 散列值就是ASCII码值的和除以数组长度的余数
function simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function put(data) {
    let pos = this.simpleHash(data);
    this.table[pos] = data;
}

function showDistro() {
    let n = 0;
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
            print(i + ": " + this.table[i])
        }
    }
}