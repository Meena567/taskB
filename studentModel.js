// studentModel.js
var mongoose = require('mongoose');
// Setup schema
var studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Student model
var Student = module.exports = mongoose.model('student', studentSchema);
module.exports.get = function (callback, limit) {
    Student.find(callback).limit(limit);
}