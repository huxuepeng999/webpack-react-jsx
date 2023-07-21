// let c1 = {
//     c11: {
//         c111: {
//             c1111: 'c1111'
//         }
//     }
// }
// function clone1(obj) {
//     let result = {}
//     for (i in obj) {
//         if (typeof obj[i] === 'object') {
//             result[i] = clone1(obj[i])
//         }else {
//             result[i] = obj[i]
//         }
//     }
//     return result
// }
// let c2 = clone1(c1)
// console.log(c2)
// c2.c11.c111.c1111 = 'c2'
// console.log(c2)
// console.log(c1)


// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//         console.log(1)
//       setTimeout(() => {
//         console.log(2)
//         resolve(x);
//         console.log(3)
//       }, 2000);
//     });
//   }
  
// async function f1() {
//     var x = await resolveAfter2Seconds(10);
//     console.log(4); // 10
// }
// f1();


async function a() {
    console.log(1)
    await b()
    console.log(2)
    console.log(10);
}

async function b() {
    console.log(3)
}

console.log(4)
a()
console.log(9);
setTimeout(()=>{
    console.log(5)
},0)
new Promise((resolve)=>{
    console.log(6)
    resolve()
}).then(()=>{
    console.log(7)
})
console.log(8);
// 41368275






// function F() {
    
// }
// Object.prototype.a = () => {
//     console.log('a')
// }
// Function.prototype.b = () => {
//     console.log('b')
// }
// var f = new F();
// console.log(f)
// console.log(f.__proto__.constructor === F)
// f.a()
// // f.b()    //报错
// F.a()
// F.b()


// let promise = new Promise(function (resolve, reject) {
//     console.log(1);
//     resolve();
// });
// setTimeout(() => console.log(2), 0);
// promise.then(() => console.log(3));
// console.log(6);
// let promise1 = new Promise(function (resolve, reject) {
//     console.log(5);
//     resolve();
// });
// console.log(4);

// 1,4,3,2

// var a=1;
// function test(){
// console.log(a)
// var a="test"
// }
// console.log(a)
// test()
// console.log(a)
// undefined



// function test(){}
// test.prototype.say=()=>console.log(1)
// var a=new test()
// test.prototype.say=()=>console.log(2)
// a.say()
// 2


// function test(){}
// test.prototype.say=()=>console.log(1)
// console.log(test.prototype);
// var a=new test()
// test.prototype={say:()=>console.log(2)}
// a.say()
// var b = new test()
// console.log(test.prototype);
// b.say()
// 1


// function f() {
//     a = 1;
//     var b = 2;
// }
// f()
// console.log(a);
// console.log(window.a);
// console.log(b);