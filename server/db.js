const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postSchema = new schema({
    text : {
        type : String,
        required : true
    },
    createdAt : {
        type : String,
        required : true
    }
});

const postModel = mongoose.model('mongopost',postSchema);

module.exports = postModel;

