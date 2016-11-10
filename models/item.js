// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  title: {type: String, required: true},
  done: {type: Boolean, required: false}
  // a relation
  // doneBy: [{ type: m.mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = m.mongoose.model("Item", Schema);