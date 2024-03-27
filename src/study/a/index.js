
// const sleep2 = (ms) => {
//     return new Promise((resolve) => {
//         return setTimeout(resolve, ms)
//     });
//   }

// async function main() {
//     console.log('1')
//     await sleep2(2000)
//     console.log('2')
// }
// main()

async function forFun() {
    for (let index = 0; index < 5; index++) {
        console.log('res===1', index);  // 0...4
        (function(num) {
            console.log('res===2', num);    // 0...4
        })(index)
    }
}
forFun()


// /**
// * @returns {number}
// */
// function maxStackSize() {
//     // TODO: return maximum call stack size

// }

// console.log(maxStackSize())


// function exchange(nums) {
//     // TODO
//     let a
//     for (let i = 0; i < nums; i++) {
//         let j = nums.length - 1
//         if (nums[i] % 2 === 1) {

//             continue
//         }
//         if (nums[i] % 2 === 0) {
//             a = nums[i]
//             while(j > i) {
//                 j--
//             } 
//         }
//     }
// };

// console.log(exchange([1, 2, 3, 4]))
// console.log(exchange([1,2,2,3,3,4]))