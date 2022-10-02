const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the schema defines the structure of the object in the DB

// the model is the category of objects according to a schema

const blogSchema= new Schema({

    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type:String,
        required: true
    }

}, {timestamps: true});


const Blog = mongoose.model('blog', blogSchema);
//we write it as singular ('blog') because it will search in the DB Cluster after the plural "blogs", which is already configured

module.exports = Blog;
//exports the Blog object to be used in other files