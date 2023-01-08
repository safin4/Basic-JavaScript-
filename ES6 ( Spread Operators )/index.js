
function addNumbers(x,y,z) {
    return x + y + z;
}

let numbers1 = [1,2,3];
let numbers2 = [4,5,6]
let numbers = [...numbers1, ...numbers2];
console.log(numbers);


let p1 = {
    name : "Jubayer Safin",
    age : 18
}

let p2 = {
    nationality : "Bangladeshi",
    occupation : "student"
}

let p = {...p1, ...p2}
console.log(p);