// https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true
const angryProfessor = (a, k) => {
  let arrived = a.filter((v) => {
      return  v <= 0
  })
  return  arrived.length >= k ?  'NO' : 'YES'  ;
}

console.assert(angryProfessor([-1, -3, 4, 2 ], 3) === 'YES')
console.assert(angryProfessor([-1, -3, 4, 2 ], 2) === 'NO') 