flatten = collection => collection.reduce((left, right) => left.concat(right), []);


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
    // getting the scripts present in the text and filtering the non-existent
    let scripts = countBy(text, (char) => {
        // function executed in every element of they array

        // the characterScript() function returns an script objet corresponding to the given UTF-16 code
        let script = characterScript(char.charCodeAt(0));
        // if the script is not undefined, returns it's direction as the name value. Else returns none
        return script ? script.direction : "none";
    }).filter(({name}) => name !== "none");
    
    // checks which count propertiy of the given object is bigger and returns the result
    return scripts.reduce((a, b) => {return a.count > b.count ? a : b}).name;
}

/*
    Looking for elements that fail the test. If none of them fail, 
    it means that the every is true.
*/
every = (array, test) => !array.some((n) => !test(n));

  
  
loop(3, n => n > 0, n => n - 1, console.log);

console.log(flatten([[1, 2, 3], [4, 5], [6]]));
