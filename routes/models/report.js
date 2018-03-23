
var mongoose = require('mongoose');

// var Items =  new mongoose.Schema({
//     description: { type: String, required: true },
//     manpower: { type: Number, required: true },
//     remarks: { type: String, required: true },
// });

var reportschema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    date:{ type:Date,required:true },
    Greenhouse:{ type:String,required:true },
    // itemRows:[Items],
    modified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportschema);
