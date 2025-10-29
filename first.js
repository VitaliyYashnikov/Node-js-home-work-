const { number } = require("mathjs")

//Vitaliy Yashnikov
//49-5

//The functioun checking if number isdivisible without remainder
//If result is true, making a casting of result to number and printing to cinsole (if false, 
//the result will not print)
function check(num) {
    let result1 = (num % 2 === 0 || num % 3 === 0 || num % 5 === 0)
    let result2 = ((num % 2 === 0 && num % 3 === 0) || (num % 3 == 0 && num % 5 === 0) || (num % 2 === 0 && num % 5 === 0))
    let result3 = (num % 2 === 0 && num % 3 === 0 && num % 5 === 0)

    number(result1) === 1 && console.log(1)
    number(result2) === 1 && console.log(2)
    number(result3) === 1 && console.log(3)

}

check(250)



