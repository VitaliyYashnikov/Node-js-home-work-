

const { number, typeOf } = require("mathjs");

//function getting a number
//and checking if a number is simple
function chekIfSimple(num) {

    if (typeOf(num) != "number") {
        console.log("You entered wrong type, please enter a number")
    }
    else {
        for (let i = 2; i <= num; i++) {
            let ifTrue = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    ifTrue = false;
                    break;
                }

            }
            if (ifTrue)
                console.log(`${i} is simple number`);
        }
    }
}

chekIfSimple(237)