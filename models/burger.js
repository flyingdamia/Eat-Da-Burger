// Require ORM //

var orm = require('../config/orm.js');

// Burger object //

var burger = {

  // Use ORM and its Methods //

  insertOne: function (cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function (res) {
      cb(res);
    });
  },


  updateOne: function (objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  },

  selectAll: function (cb) {

    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },
};

// Exports //

module.exports = burger;
