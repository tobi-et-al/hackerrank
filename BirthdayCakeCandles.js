
// ref: https://www.hackerrank.com/challenges/birthday-cake-candles/leaderboard
// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {

    let dict = {};
    let max = 0

    for (let index = 0; index < ar.length; index++) {
        let candle = ar[index];
        if(dict[candle] == undefined){
            dict[candle] = 0;
        }
        dict[candle] += 1;
        max = dict[candle] > max ? dict[candle] : max;

    } 
    return (max);
}


birthdayCakeCandles([3,2,1,3]);