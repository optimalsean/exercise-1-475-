var mongoose = require('mongoose');
var SampleSchema = new mongoose.Schema({
  _id: String,
  value: Object,
},
{
    collection: 'death_causes_by_sex_collection'
});
mongoose.model('Sample', SampleSchema);
