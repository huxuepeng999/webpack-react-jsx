// 实现一个函数转换input数组到output数组
// input [['a', 'b'], ['n', 'm'], ['0', '1']] 
// output ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']

const inputArray = [['a', 'b'], ['n', 'm'], ['0', '1']]

const myFunction = function (inputArray) {
    let result = []
    let count = 0
    // 代码
    for (let i = 0; i < inputArray.length; i++) {
        let element = inputArray[i]
        count++
        if (element instanceof Array) {
            console.log('res===1', element)
            myFunction(element)
        } else {
            console.log('res===2', element)
            result[i] = element
            console.log('res===3', result)
        }
    }
    return result
}

console.log(myFunction(inputArray))

// 实现一个函数可以转换JSON成字符串，类似JSON.stringify
// const jsonBody = {
//   a: 11,
//   b: {
//     b: 22,
//     c: {
//       D: 33,
//       e: [44, 55, 66]
//     }
//   }
// };

// const jsonToString = function (jsonBody) {
//   // 代码
//   let result = {}
//   for (const key in jsonBody) {
//     if (jsonBody[key] instanceof Array) {
//       result[key.toString()] = jsonBody[key]
//       continue
//     }
//     if (jsonBody[key] instanceof Object) {
//       result[key.toString()] = jsonToString(jsonBody[key])
//     } 
//     else {
//       result[key.toString()] = jsonBody[key]
//     }
//   }
//   return result
// }

// console.log(jsonToString(jsonBody))
// console.log(JSON.stringify(jsonBody))