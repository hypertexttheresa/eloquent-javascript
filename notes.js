/* H6
====
Interfaces: limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.
Such program pieces are modeled using objects. Their interface consists of a specific set of methods and properties. Properties that are part of the interface are called public. The others, which outside code should not be touching, are called private.
Encapsulation: seperating interface (public properties/methods) from implementation (private methods).

If you want to pass `this` explicitly, you can use a function’s call(this, normal params) method.
Since each function has its own this binding, whose value depends on the way it is called, you cannot refer to the this of the wrapping scope in a regular function defined with the function keyword.


class declaration:
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
These only allow methods; properties have to be added to the prototype

*/
