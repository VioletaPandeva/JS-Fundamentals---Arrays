function reverseInPlace (arry) {
    let n = arry.length;
           let newArry = [];
            for (let i = n - 1; i >= 0 ; i--) {
               newArry.push(arry[i])
               
            } 
                console.log(newArry.join(' '));
        }

reverseInPlace (['a', 'b', 'c', 'd', 'e']);

