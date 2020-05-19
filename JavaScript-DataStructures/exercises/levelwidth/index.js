// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Node = require('./node');

function levelWidth(root) {
    const arr = [root,'s'];
    let count = 0;
    const counters = [];
    while (arr.length) {
        const node = arr.shift();
        if (node === 's') {
            counters.push(count);
            count = 0;
            if(arr.length){
                arr.push('s');
            }
        }
        if (node.children) {
            count++;
            arr.push(...node.children);
        }
    }
    return counters;
}

// const root = new Node(0);
// root.add(1);
// root.add(2);
// root.add(3);
// root.children[0].add(4);
// root.children[2].add(5);
// levelWidth(root)

module.exports = levelWidth;
