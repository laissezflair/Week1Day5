'use strict';

var person = {
  name: "Adam",
  age: 33,
  greeting: function(){
    console.log("hi my name is " + this.name) // NOT PERSON.NAME !!! CONTEXT!!! because it's an OBJECT
  }
}

// let's say we want to use for another object:
var another = {
  name: 'ABC',
  age: 99
}


person.greeting();

/***********/

const greeting + function(){
  console.log("Hi my name is " + this.name); //this will be undefined here -- no context
  {
    const people = [
    {
      name: 'Adam',
      age: 33
      greeting: greeting // now there is another 'greeting' function, and it will be aware of the inherent context
    }, {
      name: 'Faisal',
      age: 23,
      greeting: greeting
    }
   ]
}

// we can use .bind to MODIFY the way the function works, such that it accesses the proper context
greeting().bind(people[0]); // but kind of ignore this use of it here -- Faisal didn't really use it

people[0].greeting(); // this is how we call that function inside the object (greeting)
// this goes toward how we're going to start mixing functions and data
