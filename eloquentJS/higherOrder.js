function flatten (collection) {
    return collection.reduce((left, right) => left.concat(right), []);
}

function loop (value, test, update, body) {
    do {
        if (test(value)) {
            body(value);
            value = update(value);
        }
        else {
            break;
        }
    } while (true);
}

function every(array, test) {
    return !array.some((n) => !test(n));
}
  
  
loop(3, n => n > 0, n => n - 1, console.log);

console.log(flatten([[1, 2, 3], [4, 5], [6]]));
[].som