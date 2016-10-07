// global scope start

'use strict';

// what do we MEAN by "scope" (of a project)?
// REACH: the project should not extend BEYOND its scope

var name = 'Adam';
// global scope

var printSomething = function() {
  console.log(data);
}
// reminder: this is a function expression, not declaration
// data within this function is LOCAL scope (as it is part of the function)
/****/
var name = 'Adam';
// local scope 1 start
var printSomething = function(data){
  var delay = function(){
    // local scope 2 start
    console.log('...')
    console.log('...')
    console.log(data);
    // local scope 2 end
  }

  delay();
  // local scope 1 end
  // the way the scope of delay gets resolved is effectively a CLOSURE
}

printSomething(name);
// global scope end