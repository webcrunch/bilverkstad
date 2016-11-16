var s = g.settings;

module.exports = class REST {
  constructor(express) {
    this.settings = s.REST;
    this.DB = new g.classes.DB(); // DB connection & models
    
    this.app = express;
    this.router();
  
  }

  // setup standard CRUD for route
  router() {
    var me = this;
    this.app.all(this.settings.route, function(req, res) {
      
      var model = me.DB.getModel(req.params.model);
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
    else{
      var me = this,
          toSave = new model(params); // new model instance with data

      // write data to DB
      toSave.save(function(err, result) {
        if (err) { me.error(err, res); return; }
        res.json(result); // respond with result
      });
    }  
  }

  // READ
  GET(model, params, req, res) {

    if (req.params.model == 'repairsCar' && params.modelID != "active") { // Show all cars or an specific
      var me = this,
          func = params.modelID ? 'findById' : 'find',
          q = params.modelID ? params.modelID : {};
      model[func](q, function(err, result){
        if (err) { me.error(err, res); return; }
        var items = result;
        var newResult = [];
        if (items.length) {
          items.forEach(function(x){
            var myObj = {};
            myObj._id = x._id;
            myObj.reg_num = x.reg_num;
            myObj.modellName = x.modellName;
            myObj.customer = x.customer;
            myObj.damages = x.damages;
            var timeLeft = 0;
            x.damages.forEach(function(y){
              if (y.status != "avslutad") {
                timeLeft += y.hours;
              }
            });
            myObj.timeLeft = timeLeft + " timmar";
            myObj.status = x.status;
            myObj.__v = x.__v;
            newResult.push(myObj);
          });
        }
        else{
          var myObj = {};
          var timeLeft = 0;
          myObj._id = items._id;
          myObj.reg_num = items.reg_num;
          myObj.modellName = items.modellName;
          myObj.customer = items.customer;
          myObj.damages = items.damages;
          var timeLeft = 0;
          items.damages.forEach(function(y){
            if (y.status != "avslutad") {
              timeLeft += y.hours;
            }
          });
          myObj.timeLeft = timeLeft + " timmar";
          myObj.status = items.status;
          myObj.__v = items.__v;
          newResult.push(myObj);
        }
        res.json(newResult);
      });
    }
    else if (req.params.model == 'repairsCar' && params.modelID == "active") { // Show all cars with an active repair
      var me = this;
      model['find']({status: "pågående"}, function(err, result){
        if (err) { me.error(err, res); return; }
        var items = result;
        var newResult = [];
        items.forEach(function(x){
          var myObj = {};
          myObj._id = x._id;
          myObj.reg_num = x.reg_num;
          myObj.modellName = x.modellName;
          myObj.customer = x.customer;
          myObj.damages = x.damages;
          var timeLeft = 0;
          x.damages.forEach(function(y){
            if (y.status != "avslutad") {
              timeLeft += y.hours;
            }
          });
          myObj.timeLeft = timeLeft + " timmar";
          myObj.status = x.status;
          myObj.__v = x.__v;
          newResult.push(myObj);
        });
        res.json(newResult);
      });
    }
    else if (req.params.model == 'employee' && params.modelID == "vacation") { // show all employees in vacation
      var me = this;
      model['find']({vacation: {$size: 2}}, function(err, result){
        if (err) { me.error(err, res); return; }
        res.json(result); // respond with result
      });
    }
    else{
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

  }

  // UPDATE
  PUT(model, params, req, res) {
    if (!req.session.loggedIn){
      this.error({error: 'Login needed!'}, res); return;
    }
    else if (!params.modelID) { this.error({error: 'Missing ID!'}, res); return; }

    else{
      var me = this;
      model.findByIdAndUpdate(params.modelID, params, {new: true}, function (err, result) {
        if (err) { me.error(err, res); return; }
        res.json(result); // respond with result
      });
    }  
  }

  // DELETE
  DELETE(model, params, req, res) {
    if (!req.session.loggedIn){
      this.error({error: 'Login needed!'}, res); return;
    }
    else if (!params.modelID) { this.error({error: 'Missing ID!'}, res); return; }

    else{
      var me = this;
      model.findByIdAndRemove(params.modelID, function(err, result) {
        if (err) { me.error(err, res); return; }
        res.json(true); // respond with result
      });
    }  
  }

  error(err, res) {
    res.status(400);
    res.json(err);
  }
};