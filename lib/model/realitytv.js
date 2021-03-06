const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const realitytvSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    releaseYear: Number,
    cast: [{name: String, season: Number}]
});

module.exports = mongoose.model('Realitytv', realitytvSchema);