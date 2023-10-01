function evenOddSubtraction (arry) {
let sumEvenNum = 0;
let sumOddNum = 0;
let difference = 0;

    for (let i = 0; i < arry.lenght; i++) {
        arry [i] = Number(arry[i]);
    }

    for (let num of arry) {
        if (num % 2 ==0) {
            sumEvenNum += num;
        }else {
            sumOddNum += num;
        }
    }
    difference = sumEvenNum - sumOddNum;

    console.log(difference);
}

evenOddSubtraction ([1,2,3,4,5,6]);

