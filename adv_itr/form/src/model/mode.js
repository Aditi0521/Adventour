const mongoose = require('mongoose');

const  formSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
    message : {
        type : String,
        required : true,
    }
});

const formCollection = new mongoose.model('formcollection', formSchema);

module.exports = formCollection;