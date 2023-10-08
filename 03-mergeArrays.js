function mergeArrays (arr1, arr2) {
let tirdArr = [];

for (let i = 0; i < arr1.length; i++) {
    let el1 = arr1[i];
    let el2 = arr2[i];

    if (i % 2 == 0) {
        tirdArr.push(Number(el1) + Number(el2));
    }else {
        let concatenate = el1 + el2;
        tirdArr.push(concatenate);
    }
}
console.log(tirdArr.join(' - '));
}
mergeArrays (['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11']);