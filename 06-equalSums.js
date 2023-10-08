function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;

    for (let currentI = 0; currentI < arr.length; currentI++) {
        for (let i = 0; i < arr.length; i++) {
            if (i !== currentI) {
                let num = Number(arr[i]);
                if (i < currentI) {
                    leftSum += num;
                } else if (i > currentI) {
                    rightSum += num;
                }

                if (currentI === 0) {
                    leftSum = 0;
                } else if (currentI === arr.length) {
                    rightSum = 0;
                }
            }
        }
            if (leftSum === rightSum) {
                console.log(currentI);
                isEqual = true
            } else {
                leftSum = 0;
                rightSum = 0;
            }

        }
        if (!isEqual) {
            console.log('no');
        }

    }


equalSums([1, 2, 3, 3]);