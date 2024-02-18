// testing functions and looping throught an object's properties

// normal function
function capitalize(string) {
    let firstLetterUppercase = string.charAt(0).toUpperCase();
    return firstLetterUppercase + string.slice(1);
}

// arrow function
const capitalizeArrow = string => string.charAt(0).toUpperCase() + string.slice(1);

console.log(`luis said "hello"`)

let Person = {
    name: "Luis",
    age: 19,
    isStudent: true,
}

for (const key in Person) {
    console.log(capitalizeArrow(key) + ": " + Person[key]);
}