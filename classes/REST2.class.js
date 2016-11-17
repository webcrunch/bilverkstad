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
      me.SQL.getTable(req.params.table, (response, error)=>{
        // do we have a 404?
        var table = response;
      console.log(table, "table console");
      console.log(req.method);
      if (!me[req.method] || !table) {
       res.sendStatus(404);
        res.end();
        return;
      }

      // // how to check if not logged in
      // if (!req.session.loggedIn) { /*...*/ }

      // combine any data sent in the request body with
      // any data sent in the request URL
      
      var params = req.body || {};
      
      params.table = req.params.table;
      
    //   if (req.params.modelID) {
    //     params.modelID = req.params.modelID;
    //   }

      // and call the appropriate method
      me[req.method](table, params, req, res);
    });
     });
      
      
      
  }

  // CREATE
  POST(table, params, req, res) {
    
    // if (!req.session.loggedIn){
    //   this.error({error: 'Login needed!'}, res); return;
    // }
    // else
         
  }

  // READ
  GET(table, params, req, res) {
    var me  = this;

     me.SQL.GET(req.params.table, (response, error)=>{
      if(error){res.sendStatus(400)}
        res.json(response);

      });
  }

  // UPDATE
  PUT(model, params, req, res) {
    if (!req.session.loggedIn){
      this.error({error: 'Login needed!'}, res); return;
    }
    else if (!params.modelID) { this.error({error: 'Missing ID!'}, res); return; }

    else
      var me = this;
      model.findByIdAndUpdate(params.modelID, params, {new: true}, function (err, result) {
        if (err) { me.error(err, res); return; }
        res.json(result); // respond with result
      });
  }

  // DELETE
  DELETE(model, params, req, res) {
    if (!req.session.loggedIn){
      this.error({error: 'Login needed!'}, res); return;
    }
    else if (!params.modelID) { this.error({error: 'Missing ID!'}, res); return; }

    else
      var me = this;
      model.findByIdAndRemove(params.modelID, function(err, result) {
        if (err) { me.error(err, res); return; }
        res.json(true); // respond with result
      });
  }

  error(err, res) {
    res.status(400);
    res.json(err);
  }
};