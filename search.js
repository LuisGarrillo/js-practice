const sort = require("./sorting"); 

function binarySearch(array, value) {
    if (!Array.isArray(array)) {
        throw new TypeError("binarySearch only accepts arrays!");
    }

    let searchArray = new Array();
    searchArray = array;
    if (searchArray.length <= 1) {
        if (searchArray.length == 1 && searchArray[0] == value) {
            console.log(value + " found in the list");
            return true;
        }
        else {
            console.log(value + " not found in the list");
            return false;
        }
    }
    let halfIndex = Math.ceil(searchArray.length/2);
    
    if (searchArray[halfIndex] < value) {
        binarySearch(searchArray.slice(halfIndex), value);
    }
    else if (searchArray[halfIndex] > value) {
        binarySearch(searchArray.slice(0, halfIndex), value);
    }
    else {
        console.log(value + " found in the list");
        return true;
    }
}

function linearSearch(array, value) {
    if (!Array.isArray(array)) {
        throw new TypeError("binarySearch only accepts arrays!");
    }

    for (let i = 0, length = array.length; i < length; i++) {
        if (array[1] == value) {
            console.log(value + " found in the list");
            return true;
        }
    }

    console.log(value + " not found in the list");
    return true;
}

let testArray = Array.from({length: 10000000}, () => Math.floor(Math.random() * 10000000));;
testArray = sort.mergeSort(testArray);

console.time("Binary search runtime");
binarySearch(testArray, 4);
console.timeEnd("Binary search runtime")

console.time("Linear search runtime");
linearSearch(testArray, 4);
console.timeEnd("Linear search runtime")