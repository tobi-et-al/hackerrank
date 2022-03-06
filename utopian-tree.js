// https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true
// 0          1
// 1          2
// 2          3
// 3          6
// 4          7
// 5          14


const utopianTree = (n) => {
    // Write your code here
    let h = 0; 
    let y = 0;
    while(y <= n){

        if (y == 0) h = 1
        if (y%2 == 1 && y > 0) h *=2
        if (y%2 == 0 && y > 0) h +=1
        y++
    }
    return h
}

console.assert(utopianTree(0), 1)
console.assert(utopianTree(1), 2)
console.assert(utopianTree(2), 3)
console.assert(utopianTree(3), 6)
console.assert(utopianTree(4), 7)
console.assert(utopianTree(5), 14)