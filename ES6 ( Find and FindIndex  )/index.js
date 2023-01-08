
// Find and FineIndex (callback, value)

let numbers = [5,55,14,7,78];

const evenNumber = (value, index, array) => {
    if(value % 2 === 0)
    return value;
}

let firstEvenNumber = numbers.find(evenNumber);
let firstEvenNumberIndex = numbers.findIndex(evenNumber);
console.log(firstEvenNumber)
console.log(firstEvenNumberIndex)


const students = [

  {

    id : 101,
    gpa : 5.00

  },

  {

    id : 102,
    gpa : 4.50

  },

  {

    id : 103,
    gpa : 4.00

  },

  {

    id : 104,
    gpa : 3.50

  }

]

console.log(students.find(x => x.gpa > 4))