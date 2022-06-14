const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
    
    family : {
        type : String,
        required : true

    },
    order : {
        type : Number,
    removed : true
    },
    genus : {
        type : String,
        required : false

    },
    name : {
        type : String,
        required : false,

    },
    free : {
        type : Boolean,
        required: false,
    }

})

module.exports = mongoose.model('Species', speciesSchema)