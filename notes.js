/*
H1 - 4
===
bindings + values -> environment
    |
expression
    |
statement
    |
program

Functions: side-effects vs. return
Operators:
*/
//unary
typeof varName;
//binary
2 * 2; var1 && var2;
//ternary
var1 ? result1 : other_result;

/*
short-circuit evaluation
*/
a || b; // if a then a, else b
a && b // !a ? a : b
/*
Scopes: global - 'var'; local - within a function or bloc 'let';
Lexical scoping: local scope has access to outer scopes.
Call stack: where computer stores its flow of control, the current context is stored on top of this.
Closure: reference a specific instance of a local binding in an enclosing scope
Recursion: A function can call itself as log as the stack doesn't overflow -> often most useful/efficient when exploring several branches
Properties: value.x, or value[x] to access property. The latter gets evaluated while the first is a precise property name
Immutability: binding vs. value itself
*/

/*
H5 Functions
===
abstractions: smaller functions with describing names
higher-order functions: functions that operate on functions
standard array methods: forEach, map, filter, reduce
abstract vs. fast computation: abstract is more readable code, but for example map and filter methods build new arrays.
*/

/* H6 Objects
====
Interfaces: limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.
Such program pieces are modeled using objects. Their interface consists of a specific set of methods and properties. Properties that are part of the interface are called public. The others, which outside code should not be touching, are called private.
Encapsulation: seperating interface (public properties/methods) from implementation (private methods).

If you want to pass `this` explicitly, you can use a function’s call(this, normal params) method.
Since each function has its own this binding, whose value depends on the way it is called, you cannot refer to the this of the wrapping scope in a regular function defined with the function keyword.


class declaration: */
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
/*
These only allow methods; properties have to be added to the prototype
static methods are stored on the constructor

proptotypes
====
prototypes are ordened in a tree, with Object.prototype as entity behind almost all objects. Use instanceof to see through inherited types.
As such, properties that exist in a prototype can be overridden.
use the hasOwnProperty() or Map class to use an object as a map.
inheritance through subclasses, parent is called 'superclasss', drawback is that it creates class hierarchies that get entangled.

symbols, iterators
===
Symbols are values created with the Symbol function. Unlike strings, newly created symbols are unique.

a method named with the Symbol.iterator symbol  should return an object that provides a second interface, iterator.  It has a next method that returns the next result.
*/

/*

H8 Debugging
===

In strict mode the this binding holds the value undefined in functions that are not called as methods.
Unwinding the stack: when throwing an exception the program jumps out of not just the current function but also its callers, all the way down to the first call that started the current executio
Error is a standard JavaScript constructor that creates an object with a message property and a stack property containing the stack trace
To help address the unpredictable control flow caused by exceptions, finally blocks can be used to ensure that a piece of code always runs when a block finishes.

*/

/*
H10 Modules
===
NPM is two things: an online service where one can download (and upload) packages and a program (bundled with Node.js) that helps you install and manage them.
The relations between modules are called dependencies.
We can wrap the module’s code in a function and use that function’s scope as module scope. -> CommonJS modules
Because the loader wraps the module code in a function, modules automatically get their own local scope. All they have to do is call require to access their dependencies and put their interface in the object bound to exports.
*/
