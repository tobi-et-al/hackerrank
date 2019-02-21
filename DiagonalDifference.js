function diagonalDifference(arr) {
    var xpos, ypos, LtoR, RtoL;
    xpos = ypos = LtoR = RtoL = 0;
    const n = arr.length;
    ypos = n - 1;

    for (var i = 0; i < n; i++) {
        if (arr[i] && arr[i][xpos]) {
            LtoR += arr[i][xpos];
        }
        xpos += 1;

        if (arr[i] && arr[i][ypos]) {
            RtoL += arr[i][ypos];
        }
        ypos -= 1;

    }
 
    return (LtoR - RtoL) > 0 ? (LtoR - RtoL) : ((LtoR - RtoL) * -1);
}

(diagonalDifference([[ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));
//console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]));