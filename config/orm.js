// Import MySQL //

var connection = require('./connection.js');

// Functions //

function helpSql(ob) {
	var arr = [];
	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}

function helper(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// ORM //

var orm = {
	
	// Method that returns all table entries //
	
	selectAll: function (tableInput, cb) {
		
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// Method to insert one table entry //
	
	insertOne: function (table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += helper(vals.length);
		queryString += ") ";

		connection.query(queryString, vals, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// Method to update a single table entry //
	updateOne: function (table, objColVals, condition, cb) {
		
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += helpSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

// Export the ORM //
module.exports = orm;