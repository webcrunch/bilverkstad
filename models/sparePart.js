// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  name: {type: String, required: true},
  partNumber: {type: String, required: true},
  price: {type: Number, required: true},
  modellName: {type: String, required: true},
  VAT: {type: Number, required: true}
});

module.exports = m.mongoose.model("sparePart", Schema);