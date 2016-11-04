// Create a new mongoose schema damages
var Schema = m.mongoose.Schema({
  description: {type: String, required: true},
  parts: {type: String, required: false},
  employees: {type: String, required: true},
  hours: {type: Number, required: true},
  status: {type: String, required: true}, 
});

module.exports = m.mongoose.model("damages", Schema);

