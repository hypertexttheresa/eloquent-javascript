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
* Write a class Vec that represents a vector in two-dimensional space
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
