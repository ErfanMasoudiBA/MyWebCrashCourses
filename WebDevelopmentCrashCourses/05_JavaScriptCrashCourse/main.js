// log a statement using console.log

console.log('Hello from main')


// variables

let age = 25
console.log(age)

const salary = 80000
console.log(salary)

let sum = 0
sum =5
console.log(sum)

// Data Types

const name = 'erfan'
const language = 'js'
const channel= 'erfmas'

const total = 0
const PI = 3.14


const isPrimaryNumber = true
const isNewUser = false


let result
console.log(result)


const res = undefined
const data = null

const person = {
    // key : value
    'firstName' : 'erfan',
    'lastName' : 'masoudi',
    'age' : 30
}
console.log(person.firstName)


const oddNumbers = [1,3,5,7,9]
console.log(oddNumbers[3])

let a =10
a='erf'
a=true
console.log(a)


let x=10
let y=5
console.log(x/y)

console.log(++x)
console.log(--y)
console.log(x==y)
console.log(x===y)

const isValidNumber = x>8 && 8>y
console.log(isValidNumber)


const isValidNumber2 = x>8 || 8>y
console.log(!isValidNumber)

console.log('Erfan '+'Masoudi')
console.log('Erfan '-'Masoudi')

const isEven = 10 % 2 === 0 ? true : false
console.log(isEven)

const isEven2 = 10 % 2 === 0 ? 'Number is even' : 'Number is Odd'
console.log(isEven2)


console.log('3'+2+true)
console.log('3'-'1')
console.log('3'-null)
console.log('3'-undefined)


console.log(parseInt(3.14))
console.log(String(500))
console.log(String(null))
console.log(String(undefined))
console.log((500).toString())
console.log(Boolean(10))


const var1='test'
const var2='test'

console.log(var1 == var2)
console.log(var1 === var2)

const var3=10
const var4='10'

console.log(var3 == var4)
console.log(var3 === var4)

const num = 5
if(num>0){
    console.log('Number is positive')
}else{
    console.log('Number is not Positive!')
}

const num2 = -5
if(num2>0){
    console.log('Number is positive')
}else if (num2<0) {
    console.log('Number is negetive')
}else {
    'Number is zero'
}

const num3 = 0
if(num3>0){
    console.log('Number is positive')
}else if (num3<0) {
    console.log('Number is negetive')
}else {
    console.log('Number is zero')
}

let color = 'red'
color = 'blue'
color = 0

switch (color) {
    case 'red':
        console.log('Color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break
    default:
        break;
}
let array = [0,2,4,6,8]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
let i=0
do {
    console.log('erfan '+ i);
    i++
} while (i<=5);


const numArray = [1,2,3,4,5]
for (const num of numArray) {
    console.log('erfannnnn' + num)
}


function funcTest(test) {
    console.log('This is a test! '+test)
}

funcTest('erfan')
funcTest('mas')
funcTest('sed')


function add(a,b) {
    return a+b
}

const arrowSum = (a,b) => {
    return a+ b
}

const summ = add(22,22)
console.log(summ)

const summ2 = arrowSum(22,22)
console.log(summ2)

const myNum = 100
const myName = 'Superman'

if (true) {
    const myName = 'Batman'
    console.log(myName)
    console.log(myNum)
}