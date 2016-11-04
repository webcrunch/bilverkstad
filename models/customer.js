// Create a new mongoose schema
var Schema = m.mongoose.Schema({
	SSN : {type: String, required: true},
	fName: {type: String, required: true},
	lName: {type: String, required: true},
	address: {title: String, required: true},
	email: {title: [], required: false}
});

module.exports = m.mongoose.model("Customer", Schema);
