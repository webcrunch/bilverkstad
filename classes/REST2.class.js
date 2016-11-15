var s = g.settings;

module.exports = class REST {
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
      
      var model = me.DB.getModel(req.params.table); // kollar efter tablen ? 
      // do we have a 404?
      if (!me[req.method] || !model) {
        res.sendStatus(404);
        res.end();
        return;
      }

      // how to check if not logged in
      if (!req.session.loggedIn) { /*...*/ }

      // combine any data sent in the request body with
      // any data sent in the request URL
      var params = req.body || {};
      params.model = req.params.model;
      if (req.params.modelID) {
        params.modelID = req.params.modelID;
      }

      // and call the appropriate method
      me[req.method](model, params, req, res);
    });
  }

  // CREATE
  POST(model, params, req, res) {
    
    if (!req.session.loggedIn){
      this.error({error: 'Login needed!'}, res); return;
    }
    else
      var me = this,
          toSave = new model(params); // new model instance with data

      // write data to DB
      toSave.save(function(err, result) {
        if (err) { me.error(err, res); return; }
        res.json(result); // respond with result
      });
  }

  // READ
  GET(model, params, req, res) {

    // pick a mongoose query function and parameters for it
    var me = this,
        func = params.modelID ? 'findById' : 'find',
        q = params.modelID ? params.modelID : {};

    // call the query function (find || findById)
    model[func](q, function(err, result) {
      if (err) { me.error(err, res); return; }
      res.json(result); // respond with result
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