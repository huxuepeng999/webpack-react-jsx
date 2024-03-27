// 实现一个函数转换input数组到output数组
// input [['a', 'b'], ['n', 'm'], ['0', '1']] 
// output ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm1']

// input [['a', 'b'], ['n', 'm']] 
// output ['an', 'am', 'bn', 'bm']

const inputArray = [['a', 'b'], ['n', 'm'], ['0', '1']]
// const inputArray = [['a', 'b'], ['n', 'm']]

const myFunction = function (inputArray) {
  let result = []
  for (let i = 0; i < inputArray.length; i++) {
    const eles = inputArray[i]
    if (eles instanceof Array) {
      const array = myFunction(eles)
      if (result.length === 0) {
        result = array
        continue
      }
      const res = []
      for (let i = 0; i < result.length; i++) {
        const ai = result[i];
        for (let j = 0; j < array.length; j++) {
          const aj = array[j];
          res.push(ai + aj)
        }
      }
      result = res
    } else {
      result.push(eles)
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
// const str = JSON.stringify(jsonBody)
// console.log('res===str1', str);

// const jsonToString = function (json) {
//   let result = ""
//   for (key in json) {
//     if (json[key] instanceof Array) {
//       console.log('res===2');
//       result += `"${key}":[${json[key]}]`
//       continue
//     }
//     if (json[key] instanceof Object) {
//       result += `"${key}":${jsonToString(json[key])}`
//       continue
//     }
//     result = `{"${key}":${json[key]},`
//   }
//   return result + "}"
// }
// const str2 = jsonToString(jsonBody)
// console.log('res===str2', str2);