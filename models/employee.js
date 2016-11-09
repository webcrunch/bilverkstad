// Create a new mongoose schema
var Schema = m.mongoose.Schema({
	SSN : {type: String, required: true},
	fName: {type: String, required: true},
	lName: {type: String, required: true},
	title: {type: String, required: true},
	vacation: [
		{type: String, required: false}
	]
});

module.exports = m.mongoose.model("employee", Schema);
