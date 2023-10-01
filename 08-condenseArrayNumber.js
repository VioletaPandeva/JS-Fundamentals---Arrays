function condenseArrayNumber (arr) {
let res = [];

while (arr.length > 1) {
  for (let i = 0; i < arr.length - 1; i++) {
    res[i] = arr[i] + arr[i+1];
  }
  arr = res;
  res = [];
}
console.log(arr.join());
}
condenseArrayNumber ([2,10,3]);

