var s = g.settings;

module.exports = class MyQuery {
  constructor(express) {
    this.settings = s.MyQuery;
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

  // READ
  GET(model, params, req, res) {

    if (req.params.model == 'repairsCar' && params.modelID == "active") {
      model['find']({status: "pågående"}, function(err, result){
        if (err) { me.error(err, res); return; }
        var items = result;
        var newResult = [];
        items.forEach(function(x){
        	var myObj = {};
        	var myDamages = [];
        	var myEmployees = [];
        	var timeLeft = 0;
        	myObj.reg_num = x.reg_num;
        	myObj.modellName = x.modellName;
        	myObj.customer = x.customer.fName + " " + x.customer.lName;
        	x.damages.forEach(function(y){
        		var myObj2 = {};
        		myObj2.description = y.description;
        		myObj2.hours = y.hours + " timmar";
            if (y.status != "avslutad") {
              timeLeft += y.hours;
            }
        		myObj2.status = y.status;
        		y.employees.forEach(function(z){
        			myEmployees.push(z.fName + " " + z.lName);     			
        		});
        		myDamages.push(myObj2);
        	});
        	myObj.damages = myDamages;
        	myObj.employees = myEmployees;
        	myObj.tidKvar = timeLeft + " timmar";
        	newResult.push(myObj); 
        });
        res.json(newResult); // respond with result
      });
    }
    else if (req.params.model == 'employee' && params.modelID == "vacation") {
      model['find']({vacation: {$size: 2}}, function(err, result){
        if (err) { me.error(err, res); return; }
        res.json(result); // respond with result
      });
    }

  }

  error(err, res) {
    res.status(400);
    res.json(err);
  }
};