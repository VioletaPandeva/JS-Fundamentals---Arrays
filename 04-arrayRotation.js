function arrayRotation (arr, rotationTime) {

    for (let rotation = 1; rotation <= rotationTime; rotation++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(' '));

}
arrayRotation ([51, 47, 32, 61, 21], 2);