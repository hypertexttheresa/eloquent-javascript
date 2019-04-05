/*
* https://eloquentjavascript.net/08_error.html#i_n1zYouiAfX
* Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.
*/

class MultiplicatorUnitFailure extends Error {
}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        }
        catch (e){
            if (e instanceof MultiplicatorUnitFailure) {
                console.log(e.message);
            } else {
                throw e;
            }
        }
    }
}

/*
* https://eloquentjavascript.net/08_error.html#i_iGlwnUbkRs
* Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box is locked again before returning
*/
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
};

function withBoxUnlocked(body) {
    if (!box.locked) {
        var wasUnlocked = true;
        box.unlock();
    }

    try {
        return body();
    } catch (e) {
        console.log(e.message);
    }
    finally {
        if(!wasUnlocked) {
            box.lock();
        }
    }
}
