'use strict';

var connection;

module.exports = class SQL {
	constructor(){
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
			console.log("Mysql connected to bilverkstadDB");
		});

	}

	getTable(table,cb){
		this.connection.query('SHOW TABLES LIKE "' + table + '"'  ,(err, data) =>{
			if(err) {cb(false);}
				cb(true);
		});

	}

	GET(table, cb){
		this.connection.query('SELECT * FROM ' + table   ,(err, data) =>{
			if(err){cb(err);}
			cb(data);
		});
	}

	GETSPECEFIC(table,id,cb){
		this.connection.query('SELECT * FROM ' + table + 'WHERE SSN =' + id   ,(err, data) =>{});	
	}

	INSERT(tableName,data,cb){
		console.log(tableName);
		console.log(data);//' + tableName + '
		this.connection.query('INSERT INTO customer  SET  ?' , data ,(err, data) =>{
			if(err){cb(err);}
			cb(true);
		});
		
	}

	DELETE(query,cb){
		this.connection.query('SHOW TABLES LIKE "' + table + '"'  ,(err, data) =>{});
	}

	UPDATE(query,cb){
		this.connection.query('SHOW TABLES LIKE "' + table + '"'  ,(err, data) =>{});
	}

	
	
};