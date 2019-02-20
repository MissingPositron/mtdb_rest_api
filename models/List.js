var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({
  tech: { type:String },
  MT_stage: { type:String },
  tb_name: { type: String },
  package: { type: String },
  die_stack: { type: String },
  T5773_available: { type: Boolean },
  T5831_available: { type: Boolean },
  description: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('list', ListSchema);