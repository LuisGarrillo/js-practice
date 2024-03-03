const sort = require("./sorting"); 

function binarySearch(array, value) {
    if (!Array.isArray(array)) {
        throw new TypeError("binarySearch only accepts arrays!");
    }

    let searchArray = new Array();
    searchArray = array;
    let length = searchArray.length;
    if (length <= 1) {
        if (length == 1 && searchArray[0] == value) {
            console.log(value + " found in the list");
            return true;
        }
        else {
            console.log(value + " not found in the list");
            return false;
        }
    }
    let halfIndex = Math.ceil(length/2);
    
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

function testSearch(times, testFunction) {
    
    let avg = 0;
    for (let i = 0; i < times; i++) {
        let testArray = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));;
        testArray = sort.mergeSort(testArray);

        const start = performance.now();
        testFunction(testArray, 45000);
        const end = performance.now();
        avg += end - start
    }

    return avg / times
}



console.log(testSearch(10, binarySearch) + "ms");
console.log(testSearch(10, linearSearch) + "ms");

//console.time("Linear search runtime");
//linearSearch(testArray, 4);
//console.timeEnd("Linear search runtime")