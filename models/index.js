var mongoose = require('mongoose');
var bluebird = require('bluebird');

mongoose.Promise = bluebird 

let models = {} 

models.Cart = (require('./cart'))
models.User = (require('./user'))


module.exports = models