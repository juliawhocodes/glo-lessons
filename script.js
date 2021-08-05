let number = 266219;
console.log(number);
let str = number.toString();
console.log(str);
let arr = str.split('');
console.log(arr);
/* жалко, так нельзя
let result1 = arr[0] *  arr[1] *  arr[2] *  arr[3] *  arr[4] *  arr[5]; 
    console.log(result1);
    */
    let result1 = 1;
    for (let i = 0; i < arr.length; i++) {
        result1 *= arr[i];
    };
    console.log(result1);

    let result2 = result1 ** 3;
    console.log(result2);
    let finalResult = result2.toString();
    console.log(finalResult.slice(0, 2));