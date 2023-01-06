
// Callback and Higher-Order Function

function square(x) {
    console.log(`square of ${x} : ${x * x}`);
}


function higherOrderFunction (num, callback) {
     callback(num)
}

higherOrderFunction(6,square)



const taskOne = (callback) => {
    console.log("Task1");
    callback();
  };
  
  
  const taskTwo = (callback) => {
   setTimeout(() => {
        console.log("Task2. Data Loading");
        callback();
        }, 3000);
  };
  
  
  const taskTree = (callback) => {
    console.log("Task3");
    callback();
  };
  
  
  const taskFour = (callback) => {
    console.log("Task4");
    callback();
  };
  
  
  const taskFive = () => {
    console.log("Task5");
  };

taskOne(() => {
   taskTwo(() => {
    taskTree(() => {
        taskFour(() => {
            taskFive();
        });
            
    });

   });
});


console.log("hi")

document.querySelector("button").addEventListener('click', () => {
    console.log("button is clicked");
});

console.log("bye");