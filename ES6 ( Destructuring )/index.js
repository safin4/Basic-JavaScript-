
// Array Destructuring

let numbers = [10,20,30,40,50]
let [num1, num2, ...z] = numbers
console.log(z)


// Swap Variables

let a = 10, b = 20;
[a,b] = [b,a]
console.log(a)
console.log(b)


// Object Destructuring

const studentInfo = {
    id : 101,
    fullName : 'Jubayer Safin',
    gpa : 4.61,
    languages : {
       native : 'Bangla',
       beginner : 'English'
    }
}


const {id, fullName, gpa,languages} = studentInfo

console.log(id)
console.log(fullName)
console.log(gpa)
console.log(languages)


// Destructuring Function Parametters

const students = ({id, fullName}) => {
    console.log(`${id}, ${fullName}`)
}

const student = {
    id : 101,
    fullName : "Jubayer Safin"
}

students(student)