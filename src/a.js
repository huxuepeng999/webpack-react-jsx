const listData = [
    {
        id: "p1",
        title: '广东',
    },
    {
        id: "p2",
        title: "四川",
    },
    {
        id: "p1-1",
        pid: 'p1',
        title: '广州',
    },
    {
        id: "p2-1",
        pid: 'p2',
        title: "成都",
    },
    {
        id: "p2-2",
        pid: 'p2',
        title: "德阳"
    },
    {
        id: "p2-3",
        pid: 'p2',
        title: "绵阳"
    },
    {
        id: "p2-1-1",
        pid: 'p2-1',
        title: "高新区",
    }
]
function test1(datas) {
    let res = []
    res = datas.filter((r)=>!r.pid)
    function childList(childs) {
        for (let i = 0; i < childs.length; i++) {
            const ele = childs[i];
            if (!ele.children) {
                ele.children = []
            }
            ele.children = datas.filter((r) => r.pid === ele.id)
            if (ele.children.length > 0) {
                childList(ele.children)
            }
        }
    }
    childList(res)
    console.log(res);
}
test1(listData)



// function a1(name) {
//     return `a1: ${name}`
// }
// console.log(a1());

// const arr = [1,2,3,4,5,6]
// const b = arr.filter((r) => r % 2 === 0)
// console.log(b);

// let person = {a: 1}
// const p2 = [person]
// // person.a = 3
// person = null
// console.log(p2);



// setTimeout(()=>{
//     console.log(1)
// }, 0)

// new Promise((resolve)=>{
//     console.log(2);

//     for (let i = 0; i < 100; i++) {
        
//         if (i === 99) {
//             resolve()
//         }      
//     }
//     console.log(3);
// }).then(()=>{
//     console.log(4);
// })
// console.log(5);
