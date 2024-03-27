// const p = new Promise((resolve, reject) => {
//     // resolve('ok')
//     reject('err')
// })
// p.then((result) => {
//     console.log('res===1', result);
// }, (reason) => {
//     console.log('res===2', reason);
// })
// console.log('res===p', p);

function Promise2(onExecutor) {

    this.promiseState = 'pending';
    this.promiseValue = null;
    this.resolvedCallback = null
    this.rejectedCallback = null
    const _this = this;
    function resolve(value) {
        if (_this.promiseState !== 'pending') return
        _this.promiseState = 'resolved';
        _this.promiseValue = value;
        this.resolvedCallback && this.resolvedCallback(value)
    }

    function reject(value) {
        if (_this.promiseState !== 'pending') return
        _this.promiseState = 'rejected';
        _this.promiseValue = value;
        this.rejectedCallback && this.rejectedCallback(value)
    }

    onExecutor(resolve, reject);
}

Promise2.prototype.then = function(onResolve, onReject) {

    const _this = this
    // return new Promise2((resolve, reject) => {
        if (_this.promiseState === 'resolved') {
            onResolve(_this.promiseValue)
        } else if (_this.promiseState === 'rejected') {
            onReject(_this.promiseValue)
        } else {
            _this.resolvedCallback = onResolve
            _this.rejectedCallback = onReject
        }
    // })
}