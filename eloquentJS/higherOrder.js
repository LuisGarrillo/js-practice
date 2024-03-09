function flatten (collection) {
    return collection.reduce((left, right) => left.concat(right), []);
}

console.log(flatten([[1, 2, 3], [4, 5], [6]]));