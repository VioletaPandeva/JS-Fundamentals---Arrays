function reverseArrayNumbers (n, arry) {
let newArry = [];
    for (let i = n - 1; i >= 0 ; i--) {
       newArry.push(arry[i])
       
    } 
        console.log(newArry.join(' '));
}

reverseArrayNumbers (3, [10, 20, 30, 40, 50]);
