const mongoose = require('mongoose')


const fileSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
    emailTo: { type: String },
    emailFrom: { type: String },
},
    { timestamps: true }
);

module.exports = mongoose.model('File', fileSchema);