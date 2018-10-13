/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In a regular function 'this' points to the window object
* 2. When a method is called 'this' points to the object on the left side of the dot.
* 3. When a fuction is called in a constructor 'this' is the object being created by the constructor.   
* 4. When you explicitly set the value ( bind, call, apply ) 'this' points to wherever you have set it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function logThis() {
    console.log(this);
}

logThis();

// Principle 2

// code example for Implicit Binding
const obj = {
    myMethod() {
        console.log(this);
    }
};

obj.myMethod();
// Principle 3

// code example for New Binding
class Person {
    constructor(name) {
        this.name = name;
    }
}

const test = new Person('Test');
console.log(test.name);
// Principle 4

// code example for Explicit Binding
explicitlySetThis1 = logThis.bind(this, { name: 'Test1' });
explicitlySetThis2 = logThis.call(this, { name: 'Test2' });

const arr = [{ name: 'Test3' }];
explicitlySetThis3 = logThis.apply(arr);
