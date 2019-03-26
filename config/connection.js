var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	// JawsDB on Heroku //
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB for localhost //
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burgers_db'
	})
};

connection.connect(function (err) {
	if (err) {
		console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
		return;
	}
	console.log('Connected as id ' + connection.threadId + '\n\n');
});

// Export connection //
module.exports = connection;
