// 01_timeouts

// function greet() {
//     console.log('Hello');
// }

// setTimeout(greet,2000)

// function greet2(name) {
//     console.log(`Hello ${name}`);
// }

// const timeoutId = setTimeout(greet2,2000, 'Erfan')
// clearTimeout(timeoutId)

// // setInterval(greet, 1000)

// const IntervalId = setInterval(greet2 , 2000, 'ErfMas')
// clearInterval(IntervalId)

// 02_callbacks

// function greet(name) {
//     console.log(`Hello ${name}`);

// }
// function greetErf(greetFn) {
//     const name = 'Erf'
//     greetFn(name)
// }
// greetErf(greet)

// Creating a promise that fulfills after 5 seconds
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('bringing tacos'); // Change status from pending to fulfilled
//     }, 5000);
//   });

// Creating a promise that rejects after 5 seconds
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('not bringing tacos. food truck not there.'); // Change status from pending to rejected
//     }, 5000);
//   });

//   // Success callback
//   const onFulfillment = (result) => {
//     console.log(result)
//     console.log('Set up the table to eat tacos');
//   };

//   // Failure callback
//   const onRejection = (error) => {
//     console.log(error);
//     console.log('Start cooking pasta');
//   };

//   // Handling the first promise
//   promise1.then(onFulfillment).catch(onRejection);

//   // Handling the second promise
//   promise2.then(onFulfillment).catch(onRejection);

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// expected output: Array [3, 42, "foo"]

// async function greet() {
//     return Promise.resolve("Hello")
// }
// greet()

// .then((value) => console.log(value))

// async function greet() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello")
//         }, 1000);
//     });
//     let result = await promise;

//     console.log(result);

// }

// greet()

// function resolveHello() {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("Hello");
//     }, 2000);
//   });
// }

// function resolveWorld() {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("World");
//     }, 1000);
//   });
// }

// // sequential execution
// async function sequentioalStart() {
//   const hello = await resolveHello();
//   console.log(hello); //logs after 2 seconds

//   const world = await resolveWorld();
//   console.log(world); //logs after 2+1 = 3 seconds
// }
// sequentioalStart();

// // concurrent execution
// async function concurrentStart() {
//     const hello = resolveHello()
//     const world = resolveWorld()

//     console.log(await hello); //logs after 2 seconds
//     console.log(await world); //logs after 2 seconds

// }
// concurrentStart()

//Parallel execution
// async function parallel() {
//   await Promise.all([
//     (async () => console.log(await resolveHello()))(),

//     (async () => console.log(await resolveWorld()))(),
//   ]);
//   console.log("finally");
// }
// parallel();

// Event loop

// In JS runtime environment

// First part of this environment is JS engine
// Whenever you declare variables or functions memory is located on the heap
// Whenever you execute the code , functions are pushed onto the call stack
// And when the function returns it is popped off the call stack

// Second part of this environment is the browser's web APIs

// The third part of this runtime environment is what is called a callback queue

// The fourth and final part is Event loop
// that has only one job : check if the call stack is empty
// and if it is push an item from the queue into the stack

// console.log('first');

// setTimeout(() => {
// console.log('second');

// }, 0);

// console.log('Third');

setTimeout(() => {
  console.log("First");
}, 0);
const promise = fetch("www/udemy.com/vishwas");
promise.then((value) => {
  console.log("Promise value is ", value);
})

for ( let i = 0; i < 1000000000; i++) {
  // blocks for 3 seconds
}


console.log('Second')