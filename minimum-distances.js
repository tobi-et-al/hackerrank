// https://www.hackerrank.com/challenges/minimum-distances/problem?isFullScreen=true

const md = (a) => {
 
  let min;
  for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if(a[i] === a[j] && i !== j){
          let diff = (i-j);
          diff = (diff >= 0 ? diff: diff * -1)
          if(min === undefined) min = diff
          if (diff < min){
            min = diff
          }
        }
      }
  }
  return min === undefined ? -1 : min;
}


console.assert(md([7,1,3,4,1,7]) === 3)
console.assert(md([1,2,3,4,10]) === -1)

