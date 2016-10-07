'use strict';

//Lodash library example use
const _ = require('lodash');

const data = _.flatten [1, [2], [3, [4], 5];

console.log(data)


// Use Moment.js to output tomorrow's date

const moment = require('moment');

const tomorrow = moment().add(1, 'd').format('YYYY/MM/DD');

console.log(tomorrow);