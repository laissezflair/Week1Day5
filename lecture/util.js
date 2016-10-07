'use strict';

const util = require('./util');

// passing an object here to a function called printName
util.printName({
  name: 'Jane Doe'
})

/////////////////

'use strict';

const printName = function(person){
  console.log(person.name);
}

module.exports = {
  'printName': printName //key is printName, value is the printName function
};

