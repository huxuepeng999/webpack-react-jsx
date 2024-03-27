function arrayToTree(lists, parentId = null) {
    let map = new Map()
    for (let i = 0; i < lists.length; i++) {
        let list = lists[i]
        if (list.parentId === null) {
            list.children = []
            map = list
        } else {
            if (map.id === list.parentId) {
                console.log('res===2');
                list.children = []
                map.children.push(list)
            } else {
                console.log('res===3', map);
                // const res = arrayToTree(map.children, list.parentId)
            }
        }
    }
    return map
}
// 使用示例
const array = [
    { id: 1, name: 'A', parentId: null },
    { id: 2, name: 'B', parentId: 1 },
    { id: 3, name: 'C', parentId: 1 },
    { id: 4, name: 'D', parentId: 2 },
    { id: 5, name: 'E', parentId: 2 },
    { id: 6, name: 'F', parentId: 3 },
    // { id: 7, name: 'G', parentId: null }
];
// {
//     id: 0,
//     name: 'n1',
//     children: [
//         { id: 1, name: 'A', parentId: null, children: [] },
//         { id: 7, name: 'G', parentId: null, children: [] }
//     ]
// }


const tree = arrayToTree(array, null);
console.log(tree);