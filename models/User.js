// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  firstname: {type: String, required: false},
  lastname: {type: String, required: false},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

module.exports = m.mongoose.model("User", Schema);
