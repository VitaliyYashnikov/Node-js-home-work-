
let arrLen = 20// array lenght
//function creating an array and filling it with numbers from 0 to 5
//return array
function createArr() {
    const arr = []
    for (let i = 0; i < arrLen; i++) {
        let num = Math.floor(Math.random() * 5);

        arr.push(num);
    }
    return arr;
}

let arrTocheck = createArr();
console.table(arrTocheck);

//function takes an array of condition
//counting a zero numbers in array
//return count of zerro in arry
function countZero(arr) {
    let counter = 0;
    for (let j = 0; j <= arr.length; j++) {
        let num2 = arr[j]

        num2 === 0 && counter++;

    }
    return counter;
}

const countZ = countZero(arrTocheck);
console.log(`Number of zero in array is: ${countZ}`)