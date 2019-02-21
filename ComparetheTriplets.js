//ref https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
    let finalResult = [];
    let aScore , bScore;
    aScore = bScore = 0;

    for (let index = 0; index < a.length; index++) {
        a[index] > b[index] ? 
            aScore += 1 
            : ( a[index] == b[index] 
                ? "" 
                : (bScore += 1))
    }
    finalResult.push(aScore);
    finalResult.push(bScore);
    return finalResult;

}

console.log(compareTriplets([5,6,7], [3,6,10]));
