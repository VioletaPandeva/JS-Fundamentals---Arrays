function magicSum(arr, num) {

    for (let i = 0; i < arr.length; i++) {

        if (i !== 0) {
            let previousNum = Number(arr[i - 1]);

            for (let j = i; j < arr.length; j++) {
                let currentNum = Number(arr[j]);
                let sum = currentNum + previousNum;

                if (sum === num) {
                    console.log(`${previousNum} ${currentNum}++`);
                }
            }

        }
    }

}

magicSum([1, 7, 6, 2, 19, 23], 8);