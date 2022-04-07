const qiaa = (arr) => {
  let dict = {};
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    if(!dict[arr[index]]) dict[arr[index]] = 0
    dict[arr[index]]++
    if(dict[arr[index]] > max) max = dict[arr[index]]
  }
  return (arr.length - max);
}

qiaa([3, 3, 2, 1, 3])