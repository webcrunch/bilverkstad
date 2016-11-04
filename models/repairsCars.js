// Create a new mongoose schema damages
var Schema = m.mongoose.Schema({
  reg_num: {type: String, required: true},
  model: {type: String, required: true},
  customer: {type: String, required: true},
  damages: {type: String, required: true},
  status: {type: String, required: true}, 
});

module.exports = m.mongoose.model("RepairsCars", Schema);

