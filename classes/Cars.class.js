var s = g.settings;

module.exports = class Cars {
	constructor(express) {
		this.settings = s.Cars;
		this.DB = new g.classes.DB(); // DB connection & models
		this.model = this.DB.getModel('repairsCar');
		this.app = express;
		this.router();
	}

	// setup standard CRUD for route
	router() {
		var me = this;
		this.app.all(this.settings.route, function(req, res) {
		 
		  // do we have a 404?
		  if (!me[req.method] || !model) {
		    res.sendStatus(404);
		    res.end();
		    return;
		  }
		  // and call the appropriate method
		  me[req.method](model, params, req, res);
		});
	}

	// READ
	GET(model, params, req, res) {

		// To take cars that are active.
		var me = this,
		    func = 'find',
		    q = {status: "pågående"};

		// call the query function (find || findById)
		model[func](q, function(err, result) {
		  if (err) { me.error(err, res); return; }
		  res.json(result); // respond with result
		});
	}

	error(err, res) {
	res.status(400);
	res.json(err);
  }
};