
console.log("welcome");

// How to create a promise - pending, resolve, reject

const promise1 = new Promise((resolve, reject) => {
   let completedPromise = true;
   if (completedPromise) {
     resolve("completed promise 1");
   }
   else{
    reject(new Error("not completed promise 1"));
   }
});

const promise2 = new Promise((resolve, reject) => {
    resolve("completed promise 2")
})

Promise.all([promise1, promise2])
.then((res) => console.log(res))


console.log("end");