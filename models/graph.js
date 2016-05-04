var mongoose = require('mongoose');
var SampleSchema = new mongoose.Schema({
  _id: String,
  value: Object,
},
{
    collection: 'death_counts'
});
mongoose.model('graph', SampleSchema);
