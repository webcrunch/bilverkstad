var s = g.settings;

module.exports = class REST2 {
  constructor(express) {
    this.settings = s.REST2;
    this.SQL = new g.classes.SQL(); // DB connection & models
    this.app = express;
    this.router();

  }

  // setup standard CRUD for route
  router() {
    var me = this;
    this.app.all(this.settings.route, function(req, res) {


      // var table = me.SQL.getTable(req.params.table); // dont need to but we could check if there is an table in SQL with that name 
      me.SQL.getTable(req.params.table, (response, error) => {
        // do we have a 404?
        var resis = response;


        if (!me[req.method] || !resis) {
          res.status(404);
          res.end();
          return;
        }

        
        me[req.method](req.params.table, req.params.tableID, req.body, req, res);
      });
    });

  }

  // CREATE
  POST(table, id, data, req, res) {

    var me = this;
    console.log(table);
    console.log(id);

    // if (!req.session.loggedIn){
    //   this.error({error: 'Login needed!'}, res); return;
    // }
    // else
    me.SQL.INSERT(table, data, (response, error) => {
      // if(error){res.Status(404);res.json("fel");}
      // res.json(response);
      console.log(error);
      console.log(response);
      if (error) {
        res.status(400);
        res.json(error);
        return;
      }
      res.json(response);
    });
    // console.log(table, "table22", params, "params");
    // res.end();
  }

  // READ
  GET(table, id, data, req, res) {
    var me = this;


    me.SQL.GET(table, id, (response, error) => {
      if (error) {
        res.status(400);
        res.json(error);
        return;
      }
      res.json(response);

    });

  }


  // UPDATE
  PUT(table, condition, data, req, res) {
    var me = this;
    //console.log('hello');
    //console.log(condition);
    //console.log(data);

    me.SQL.UPDATE(table, data, condition, (response, error) => {
      if (error) {
        res.status(404);
        res.json(error);
        return;
      }
      res.json(response);
    });

  }

  // DELETE
DELETE(table, id, data, req, res) {
    var me = this;


    me.SQL.DELETE(table, id, (response, error) => {
      if (error) {
        res.status(400);
        res.json(error);
        return;
      }
      res.json(response);

    });

  }

  error(err, res) {
    res.status(400);
    res.json(err);
  }
};