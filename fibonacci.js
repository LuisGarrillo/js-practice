const fibonacci = (length) => {
    if (!Number.isInteger(length)) {
        throw new TypeError("fibonachi only accepts");
    }

    let sequence = [0, 1];
    for (let i = 0; i < length; i++) {
        
        sequence.push(sequence[index - 1] + sequence[index - 2]);
    }
    return sequence;
}
/*
const fibonacciRecursive = (length, sequence = [0, 1]) => {
    if (!Number.isInteger(length)) {
        throw new TypeError("fibonachi only accepts integers as argument!");
    }
    let index = sequence.length;
    sequence.push(sequence[index - 1] + sequence[index - 2])
    if (length > 0) {
        fibonacciRecursive(length - 1, sequence)
    }
    
    
}
*/
console.log(fibonacci(8))