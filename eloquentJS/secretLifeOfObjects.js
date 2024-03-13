class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get length() {
        return Math.sqrt( (this.x ** 2) + (this.y ** 2))
    }
  
    plus(vecAdd) {
        return new Vector(this.x + vecAdd.x, this.y + vecAdd.y);
    }
    minus(vecSub)  {
        return new Vector(this.x - vecSub.x, this.y - vecSub.y);
    }
}

// imitation of a set
class Group {
    constructor() {
        this.collection = [];
    }
    
    add(value) {
        if (this.collection.some(v => v === value)) {
            this.collection.push(value);
        }
    }
    
    delete(value) {
        this.collection = this.collection.filter(v => v !== value);
    }
    
    has(value) {
        return this.collection.some(v => v === value);
    }
  
    static from(collection) {
        let group = new Group();
        for (let element of collection) {
            group.collection.push(element);
        }
        return group;
    }

    [Symbol.iterator] = function() {
        return new GroupIterator(this);
    }
    
}

// iterator class for the set imitation
class GroupIterator {
    constructor(group) {
        this.collection = group.collection;
    }
  
    next() {
        if (this.collection == 0) {
            return { done: true };
        }
        const value = this.collection.shift();
        return { value, done: false };
    }
    
}
