// let a = 10
// function outer() {
//     let b = 20
//     function inner() {
//         let c = 30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()

// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log(counter)
//     }
//     inner()
// }
// outer()
// outer()

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();
// fn();

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 4, 6));
// // sum(2,4,6) sum(2)(4)(6)

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a,b,c)
//       };
//     };
//   };
// }

// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(4))

// const add2 = curriedSum(2)
// const add3 = add2(4)
// const add4 = add3(6)
// console.log(add4)

// function sayMyName(name) {
//     console.log(`My name is ${name}`);
// }

// sayMyName('Walter White')
// sayMyName('Heisenberg')

// const person = {
//     name: 'erfan',
//     sayMyName: function () {
//         console.log(`May name is ${this.name}`)
//     }
// }

// // person.sayMyName()

// function sayMyName() {
//     console.log(`My name is ${this.name}`)
// }

// // sayMyName.call(person)

// function Person(name) {
//     this.name = name
// }

// const P1 = new Person('Ali')
// const P2 = new Person('Reza')

// // console.log(P1.name, P2.name)
// globalThis.name = 'ERFMAS'
// sayMyName()

// function Person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }

// const person1 = new Person('erfan', 'masoudi');
// const person2 = new Person('ali', 'raghimi');

// Person.prototype.getFullName = function(){
//     return this.firstName + ' ' + this.lastName
// }

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// function SuperHero(fName,lName) {
//     Person.call(this , fName,lName)
//     this.isSuperHero = true
// }

// SuperHero.prototype.fightCrime = function () {
//     console.log('Fighting crime');

// }

// SuperHero.prototype = Object.create(Person.prototype)

// const batman = new SuperHero('Bruce','Wayne')
// SuperHero.prototype.constructor = SuperHero
// console.log(batman.getFullName());

// class Person {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   }

//   sayMyName() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const classP1 = new Person("Bruce", "Wayne");

// console.log(classP1.sayMyName());

// class SuperHero extends Person {
//   constructor(fName, lName) {
//     super(fName, lName);
//     this.isSuperhero = true;
//   }
//   fightCrime() {
//     console.log("fighting crime");
//   }
// }

// const batman2 = new SuperHero("bruce", "wayne");
// console.log(batman2.sayMyName());

// // string
// const str = "erfanmas";

// // for loop
// for (let i = 0; i < str.length; i++) {
//   const element = str[i];
//   console.log(str.charAt(i));
// }

// // Array
// const arr = ["E", "R", "F", "A", "N", "M", "A", "S"];
// // for loop
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(arr[i]);
// }

// const str2 = "ali10";
// for (const char of str2) {
//   console.log(char);
// }

// const arr2 = "ALIMESSI";
// for (const item of arr2) {
//   console.log(item);
// }

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

// for (const Word of obj) {
//     console.log(Word);
// }

function normalFunction() {
    console.log('Hello');
    console.log('World');
}
function* generatorFunction() {
    yield 'Hello'
    yield 'World'
}


normalFunction()

const generatorObject = generatorFunction()
for (const Word of generatorObject) {
    console.log(Word)
}