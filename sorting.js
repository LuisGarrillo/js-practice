

function mergeSort(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("mergeSort only accepts arrays!"); 
    }

    let sortArray = new Array();
    sortArray = array;

    if (sortArray.length <= 2) {
        if (sortArray.length == 2) {
            if (sortArray[0] > sortArray[1]) {
                let aux = sortArray[0];
                sortArray[0] = sortArray[1];
                sortArray[1] = aux;
            }
        }
        
        return sortArray;
    }

    let firstHalf = sortArray.slice(0, sortArray.length/2);
    let secondHalf = sortArray.slice(sortArray.length/2);

    firstHalf = mergeSort(firstHalf);
    secondHalf = mergeSort(secondHalf);
    let mergedArray = new Array();
    let firstHalfIndex = 0;
    let secondHalfIndex = 0;

    while (true) {
        if (firstHalfIndex == firstHalf.length) {
            mergedArray = mergedArray.concat(secondHalf.slice(secondHalfIndex));
            break;
        }
        else if (secondHalfIndex == secondHalf.length) {
            mergedArray = mergedArray.concat(firstHalf.slice(firstHalfIndex));
            break;
        }

        if (firstHalf[firstHalfIndex] < secondHalf[secondHalfIndex]) {
            mergedArray.push(firstHalf[firstHalfIndex]);
            firstHalfIndex++;
        }
        else {
            mergedArray.push(secondHalf[secondHalfIndex]);
            secondHalfIndex++;
        }
    }
    
    return mergedArray;
}

function bubbleSort(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("bubbleSort only accepts arrays!")
    }

    let sortArray = new Array();
    sortArray = array;

    for (let i = 0, length = sortArray.length; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (sortArray[i] > sortArray[j]) {
                let aux = sortArray[i];
                sortArray[i] = sortArray[j];
                sortArray[j] = aux;
            }
        }
    }

    return sortArray;
}

module.exports = { mergeSort };
/*
let testArray = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));

console.time("Merge Sort");
console.log(mergeSort(testArray));
console.timeEnd("Merge Sort");

console.time("Bubble Sort");
console.log(bubbleSort(testArray));
console.timeEnd("Bubble Sort");
*/
