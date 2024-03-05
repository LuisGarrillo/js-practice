// testing functions and looping throught an object's properties

// normal function
function capitalize(string) {
    let firstLetterUppercase = string.charAt(0).toUpperCase();
    return firstLetterUppercase + string.slice(1);
}

// arrow function
const capitalizeArrow = string => string.charAt(0).toUpperCase() + string.slice(1);

console.log(`luis said "hello"`)

// class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// inheritance
class Student extends Person {
    constructor(name, age, career) {
        super(name, age);
        this.career = career;
    }
}

let studentInfo = {};
let testArray = [1,2,3,4,5,6];
let studentA = new Student("Luis", 19, "Informatic Engineering");

for (const key in studentA) {
    console.log(capitalizeArrow(key) + ": " + studentA[key]);
}

for (const i in testArray) {
    console.log(i);
}

for (const element of testArray) {
    console.log(element);
}