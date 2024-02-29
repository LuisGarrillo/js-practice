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
}

console.time();
console.log(mergeSort([5,2, 6, 14, 89, 0, 9, 2, 1,4,3, 12]));
console.timeEnd();