// Calling Population function
var populatePosts = require('./../population/mongoPop').populatePosts;

// Create a new mongoose schema damages
var Schema = m.mongoose.Schema({
  reg_num: {type: String, required: true},
  modellName: {type: String, required: true},
  customers: {
	type: m.mongoose.Schema.Types.ObjectId,
	ref: 'customer',
	required: true
  },
  damages: [{
	type: m.mongoose.Schema.Types.ObjectId,
	ref: 'damage',
	required: true
  }],
  status: {type: String, required: true}, 
});

Schema.post('find', function(docs, next) {
    populatePosts(docs, 'customer damage', next);
});

module.exports = m.mongoose.model("repairsCar", Schema);

