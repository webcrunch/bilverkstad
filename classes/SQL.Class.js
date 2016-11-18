// Code goes here
'use strict';

var connection;

module.exports = class SQL {
  constructor() {
    this.settings = g.settings.SQL;
    this.connection = m.mysql.createConnection({
      host: this.settings.host,
      user: this.settings.user,
      password: this.settings.password,
      database: this.settings.database
        // port     : "3306"
    });
    this.connect();


  }

  connect() {

    this.connection.connect(function(err) {
      if (err) {
        console.log("Error connection to db- function");
        console.log(err);
      }
      console.log("Mysql connected to bilverkstadDB");
    });

  }

  getTable(table, cb) {
    this.connection.query('SHOW TABLES LIKE "' + table + '"', (err, data) => {
      if (err) {
        cb(false);
      }
      cb(true);
    });

  }

  GET(table, id, cb) {
    console.log("table", table, "id", id);
    if (id) {

      this.connection.query("SELECT * FROM ?? WHERE SSN =?", [table, id], (err, data) => {
        if (err) {
          cb(err);
          return;
        }
        cb(data);
      });
    } else {

      this.connection.query('SELECT * FROM ??', table, (err, data) => {
        if (err) {
          cb(err);
          return;
        }
        cb(data);
      });
    }
  }



  INSERT(tableName, data, cb) {
    console.log(tableName);
    console.log(data); //' + tableName + '
    this.connection.query('INSERT INTO customer  SET  ?', data, (err, data) => {
      if (err) {
        cb(err);
      }
      cb(data);
    });

  }

// Fick detta att fungera med hjälp av Thomas

  UPDATE(table, data, condition, cb) {
    var sql1 = 'UPDATE `' + table + '` SET ';
    var paramVals = [];

    var firstParam = true;
    for(var i in data){
      if(!firstParam){ sql1 += ', '; }
      if(firstParam){ firstParam = false; }
      sql1 += '`' + i + '`' + ' = ? ';
      paramVals.push(data[i]);
    }

    sql1 += ' WHERE SSN = ?';

    paramVals.push(condition);

    console.log("SQL",sql1,"paramVals",paramVals);
    this.connection.query(sql1, paramVals, (err, data) => {
      console.log("HERE RESULT",err,data);
      cb(data,err);
    });
    //this.connection.query('UPDATE `' + table + '` SET ? =  WHERE SSN = ' + condition + '', data ,(err, data) =>{
    //	if(err){cb(err);}
    //	cb(data);

  }

DELETE(query, cb) {
    this.connection.query('SHOW TABLES LIKE  "' + table + '"', (err, data) => {});
  }


};