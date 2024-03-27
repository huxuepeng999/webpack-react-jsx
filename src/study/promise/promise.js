function MyPromise(func) {
    var self = this
    self.status = 'pending';    //定义pending状态，等待调用时改变
    self.resolveValue = null;   //增加两个变量，方便之后存储
    self.rejectReason = null;

    // 完成异步操作
    self.ResolveCallBackList = []   //存储注册时成功的函数
    self.RejectCallBackList = []    //存储失败时成功的函数

    //完成mypromise的两个方法
    function resolve(value) {
        //成功的方法
        if (self.status === 'pending') {
            self.status = 'Fulfilled'   //成功回调出发'Fulfilled状态
            self.resolveValue = value   //把传入的‘value’形参存到mypromise中，方便.then()时有该参数
            self.ResolveCallBackList.forEach(function (ele) {
                ele()//调用时可执行异步函数
            })
        }
    }

    function reject(reason) {
        //失败的方法
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.rejectReason = reason
            self.RejectCallBackList.forEach(function (ele) {
                ele()
            })
        }
    }

    try {
        func(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

// 解决return值的方法
function ResolutionReturnPromise(nextPromise, returnValue, res, rej) {
    // 可以利用，之后的.then()注册的回调函数，都是注册在nextPromise身上的这一特点巧妙处理
    if (returnValue instanceof MyPromise) {
        returnValue.then(function (val) {
            res(val)
        }, function (reason) {
            rej(reason)
        })
    } else {
        res(returnValue)
    }
}

// 完善then方法
MyPromise.prototype.then = function (func1, func2) {    //插入成功和失败两个方法
    // 处理then()
    if (!func1) {
        //如果为空将参数原封不动返回
        func1 = function (val) {
            return val
        }
    }
    if (!func2) {
        //如果为空将错误原封不动返回
        func2 = function (reason) {
            throw new Error(reason)
        }
    }

    var self = this
    var nextPromise = new MyPromise(function (res, rej) {
        //完成同步操作
        if (self.status === 'Fulfilled') {
            //then()本身是异步操作:由于没有微任务全县，这里用settimeout使每一步为异步操作
            setTimeout(function () {
                //完善数据捕获功能
                try {
                    var nextResolveValue = func1(self.resolveValue)
                    ResolutionReturnPromise(nextPromise, nextResolveValue, res, rej)
                } catch (e) {
                    rej(e)
                }
            }, 0)
        }

        if (self.status === 'pending') {
            self.ResolveCallBackList.push(function () {
                setTimeout(function () {
                    try {
                        var nextResolveValue = func1(self.resolveValue)
                        ResolutionReturnPromise(nextPromise, nextResolveValue, res, rej)
                    } catch (e) {
                        rej(e)
                    }
                })
            })
            self.RejectCallBackList.push(function () {
                setTimeout(function () {
                    try {
                        var nextPromiseValue = func2(self.rejectReason)
                        ResolutionReturnPromise(nextPromise, nextPromiseValue, res, rej)
                    } catch (e) {
                        rej(e)
                    }
                }, 0)
            })
        }
    })
    return nextPromise
}

MyPromise.race = function (promiseArr) {
    return new MyPromise(function (resolve, reject) {
        promiseArr.forEach(function (promise, index) {
            promise(resolve, reject)
        })
    })
}

MyPromise.all = function (promiseArr) {
    return new MyPromise(function (resolve, reject) {
        if (!Array.isArray(promiseArr)) {
            return reject(new TypeError('must be array'))
        }
        var countNum = 0
        var promiseNum = promiseArr.length;
        var resolvedvalue = new Array(promiseNum)
        for (var i = 0; i < promiseNum; i++) {
            (function (i) {
                promiseArr[i].then(function (value) {
                    countNum++
                    resolvedvalue[i] = value
                    if (countNum === promiseNum) {
                        return resolve(resolvedvalue)
                    }
                }, function (reason) {
                    return reject(reason)
                })
            })(i)
        }
    })
}


// function a() {
//     const c = new Promise((resolve, reject) {
//         // todo

//     })
//     c.then((a)=>{

//     })
// }