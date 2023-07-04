const mongoose = require('mongoose');

const {Schema} = mongoose;

const DonaterSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    profession:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('donate', DonaterSchema);
//model is the one jiske through hum insert karwwaayenge user ka data. It is wrapper of Schema. CRUD operations can be done using Model 