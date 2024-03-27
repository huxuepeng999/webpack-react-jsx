// function a1(x) {
//     console.log(x);
//     return function a2(y) {
//         console.log(y);
//         return x + y
//     }
// }
// const v = a1(2)(3)
// console.log(v);


// const f1 = (x) => x + 1;
// const f2 = (x) => x * 2;
// const f3 = (x) => x / 3;
// // const f = compose(f3, f2, f1);
// // console.log(f(11)); // expect: 8

// function compose(...func1) {
//     return function (x) {
//         let res;
//         if (func1.length > 0) {
//             const f1 = func1[0]
//             res = f1(x)
//             console.log(res)
//             const arr = func1.splice(0, 1)
//             console.log('res===func1.length', func1.length)
//             if (func1.length > 0) {
//                 return compose(...func1)(res)
//             }
//             return res
//         }
//     }
// }
// const c = compose(f1, f2, f3)(11)
// console.log(c)


// function repeat(func, interval, times) {
//     return (x) => {
//         let count = 0
//         const timer = setInterval(() => {
//             count++
//             if (count >= times) {
//                 clearInterval(timer)
//             }
//             func(x)
//         }, interval)
//     }
// }
// const r = repeat(console.log, 2000, 3)
// r('hello world')

// const list = [1, 2, 4]
// const square = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('ccc')
//             resolve(num * num)
//         }, 1000)
//     })
// }

// async function test() {
//     for (let i = 0; i < list.length; i++) {
//         const l = list[i];
//         const res = await square(l)
//         console.log(res)
//     }
// }
// test()
// // 1, 4, 16