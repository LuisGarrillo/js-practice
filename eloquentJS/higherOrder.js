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

function dominantDirection(text) {
    // Your code here.
    let scripts = countBy(text, (char) => {
        let script = characterScript(char.charCodeAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name !== "none");
  
    return scripts.reduce((a, b) => {return a.count > b.count ? a : b}).name;
}

function every(array, test) {
    return !array.some((n) => !test(n));
}
  
  
loop(3, n => n > 0, n => n - 1, console.log);

console.log(flatten([[1, 2, 3], [4, 5], [6]]));
[].som