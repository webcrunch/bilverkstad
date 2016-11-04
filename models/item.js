// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  title: {type: String, required: true},
  done: {type: Boolean, required: false}
});

module.exports = m.mongoose.model("Item", Schema);
