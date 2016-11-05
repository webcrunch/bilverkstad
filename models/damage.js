// Calling Population function
var populatePosts = require('./../population/mongoPop').populatePosts;

// Create a new mongoose schema damages
var Schema = m.mongoose.Schema({
  description: {type: String, required: true},
  spareParts: [{
	type: m.mongoose.Schema.Types.ObjectId,
	ref: 'sparePart',
	required: true
  }],
  employees: [{
	type: m.mongoose.Schema.Types.ObjectId,
	ref: 'employee',
	required: true
  }],
  hours: {type: Number, required: true},
  status: {type: String, required: true}, 
});

Schema.post('find', function(docs, next) {
    populatePosts(docs, 'sparePart employee', next);
});

module.exports = m.mongoose.model("damage", Schema);
