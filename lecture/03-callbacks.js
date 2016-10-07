'use strict';

// implement a function called select that plucks elements out of a list (array) of elements
//
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

// easy visualization of this callback
const peopleFilterFunc = function(person){
  // if(person.age > 50){
  // return false; // false because we want people younger than 50 years old; people OLDER will be taken OUT of the OUTPUT ARRAY that will be returned
  /*easier way*/ return person.age < 50; // means true!!
}

const peopleFilterFunc = function(person){
  return person.name.length <= 4;
} // will only return Adam
// you can ALSO use square brackets in a conditional here to referene a specific STRING in an array, i.e. to target
// a particular letter in a string, within an array


// implement our own function that calls each element in the array and includes if true, moves on if not
// first: build up an empty array, with the empty square brackets
// then: a for.Each loop
// determine what you should include (callback: function passed as a parameter)
const filter = function(data, _shouldInclude){
  const output = [];
  //for each element in data
  data.forEach(function(elm){
  if (_shouldInclude(elm)){
    output.push(elm);// if response of callback on the element is true, output.push the element itself!! ***//
    // check if this element is to be included in the output
    }
  });
  return output;
} // need to pass the source array people (here as data), and _shouldInclude (the callback)

const under_50 = people.filter(function(peopleFilterFunc)