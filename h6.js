/*
* https://eloquentjavascript.net/06_object.html#i_zO8FRQBMAy
* Write a class Vec that represents a vector in two-dimensional space
*/

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        return new Vec(x, y);
    }

    minus(vector) {
        let x = this.x - vector.x;
        let y = this.y - vector.y;
        return new Vec(x, y);
    }

    get length() {
        let distance = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return distance;
    }
}

/*
* https://eloquentjavascript.net/06_object.html#i_rpYp9Ou4LG
* Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods.
*/

class Group {
    constructor() {}
    add(value) {
        if(!this.has(value)) {
            this[value] = value;
        }
    }
    delete(value) {
        if(this.has(value)) {
            delete this[value];
       }
    }
    has(value) {
        return this[value] === value;
    }

    static from(iterable) {
        let group = new Group;
        for (let value of iterable) {
            group.add(value);
        }
        return group;
    }
}

/*
* https://eloquentjavascript.net/06_object.html#i_djD3XDJ27V
* Make the Group class from the previous exercise iterable.
*/
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.groupValues = Object.values(group);
        this.i = 0;
    }

    next() {
        if (this.i === this.groupValues.length) {
            return {done: true};
        }

        var value = this.group[this.groupValues[this.i]];
        this.i++;

        return {
            value,
            done: false
        }
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

/*
* https://eloquentjavascript.net/06_object.html#i_wcWSnr9zHV
* Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
*/

Object.prototype.hasOwnProperty.call(map, "one");
