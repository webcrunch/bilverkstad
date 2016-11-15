'use strict';

var connection;

module.exports = class SQL {
	constructor(){
		// do not connect to mongodb multiple times!
		if (connection){ return;}

		this.settings = g.settings.SQL;
		this.connection = m.mysql.createConnection({
			host     : this.settings.host,
			user     : this.settings.user,
			password : this.settings.password,
			database: this.settings.database
			// port     : "3306"
		}); 
		this.connect();


	}

	connect() {
	
		this.connection.connect(function(err){
			if(err){
				console.log("Error connection to db- function");
				console.log(err);
			}
			console.log("Upp and running ");
		});

	}

	
	
};