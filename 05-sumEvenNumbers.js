function sumEvenNumbers (arry) {
let arryAsNum = [];
let sumEvenNum = 0;

for (let i = 0; i <= arry.length - 1; i++) {
    arryAsNum [i] = Number(arry[i]);
}

for (let num of arryAsNum) {
    if (num % 2 == 0) {
        sumEvenNum += num;
    }
}
console.log(sumEvenNum);

}
sumEvenNumbers (['1','2','3','4','5','6']);
