
// Default Parameters

"use strict"
function message(text = "Hello this is default parametter") {
    console.log(`${text}`)
}

message();
message("I love js ES6");


// Rest Parameters

"use strict"
function printNumbers(x,y, ...z) {
    console.log(`x = ${x}, y = ${y}, z = ${z}`)
}

printNumbers(10,20,30,40,50);