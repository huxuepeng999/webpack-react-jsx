
// 1:   nlogn
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }
//     const pivot = Math.floor(arr.length/2)
//     const center = arr.splice(pivot,1)[0]
//     let lefts = []
//     let rights = []
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if (element < center) {
//             lefts.push(element)
//         } else {
//             rights.push(element)
//         }
//     }
//     // console.log(lefts,rights)
//     return quickSort(lefts).concat(center, quickSort(rights))
// }

let a = [12, 22, 1, 4, 23, 2, 4, 77, 3, 18]
// let b = quickSort(a)
// console.log(b)

// 2:    logn
// const quickSort = (array, left, right) => {
//     if (left >= right) return;
//     let pivot = Math.floor(array.length/2);
//     let leftIndex = left;
//     for (let i = left; i <= right; i++) {
//         console.log(array[i],array[pivot])
//         if (array[i] < array[pivot]) {
//             leftIndex++;
//             swap(array, leftIndex, i)
//         }

//     }
//     swap(array, leftIndex, pivot)

//     quickSort(array, left, leftIndex - 1)
//     quickSort(array, leftIndex + 1, right)
//     return array
// }
// const swap = (array, i, j) => {
//     [array[i], array[j]] = [array[j], array[i]]
// }

// let b = quickSort(a, 0, a.length-1)
// console.log(b)


// flat 数组降维
let c = {
    c1: 'c1',
    c2: 'c2'
}
let d = {
    d1: 'd1',
    cd: c
}
for (i in d) {
    console.log(i)
}