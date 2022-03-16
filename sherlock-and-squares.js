//https://www.hackerrank.com/challenges/sherlock-and-squares/problem?isFullScreen=true

const ss = (a, b) => {
  let cnt = 0
  let x=1
  while(x*x < a) x++;
  while(x*x <= b)  {
    cnt++;
    x++;
  }
  console.log(x)
  return cnt;
} 
console.assert(ss(24, 49) == 3)
console.assert(ss(3, 9) == 2)
console.assert(ss(17, 24) == 0)