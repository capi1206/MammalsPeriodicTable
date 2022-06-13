const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
    
    family : {
        type : String,
        required : true

    },
    genus : {
        type : String,
        required : true

    },
    name : {
        type : String,
        required : true,

    },
    free : {
        type : Boolean,
        required: true,
    }

})

module.exports = mongoose.model('Species', speciesSchema)