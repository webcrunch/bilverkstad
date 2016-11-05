// Create a new mongoose schema
var Schema = m.mongoose.Schema({
	SSN : {type: String, required: true},
	fName: {type: String, required: true},
	lName: {type: String, required: true},
	title: {title: String, required: true},
	vacation: {title: [], required: false}
});

module.exports = m.mongoose.model("Employeed", Schema);
