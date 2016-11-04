// Calling Population function
var populatePosts = require('./../population/mongoPop').populatePosts;

// Create a new mongoose schema damages
var Schema = m.mongoose.Schema({
  description: {type: String, required: true},
  spareParts: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'spareParts',
	required: true
  },
  employees: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'employees',
	required: true
  },
  hours: {type: Number, required: true},
  status: {type: String, required: true}, 
});

Schema.post('find', function(docs, next) {
    populatePosts(docs, 'spareParts employees', next);
});

module.exports = m.mongoose.model("damages", Schema);
