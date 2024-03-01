function binarySearch(array, value) {
    if (!Array.isArray(array)) {
        throw new TypeError("binarySearch only accepts arrays!");
    }

    let searchArray = new Array();
    searchArray = array;
    if (searchArray.length <= 1) {
        if (searchArray.length == 1 && searchArray[0] == value) {
            console.log("Value found at position: 1");
            return true;
        }
        else {
            console.log("Value not found");
            return false;
        }
    }
    let halfIndex = Math.ceil(searchArray.length/2);
    
    if (searchArray[halfIndex] < value) {
        binarySearch(searchArray.slice(halfIndex));
    }
    else if (searchArray[halfIndex] > value) {
        binarySearch(searchArray.slice(0, halfIndex));
    }
    else {
        console.log("Value found at position: " + (halfIndex + 1));
        return true;
    }
}

let testArray = [1, 2, 3, 4, 5];
binarySearch(testArray, 2);