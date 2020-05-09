const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

//Create a schema
const LinkSchema = new Schema({
    username: {
        type: String,
        required: true, 
        index: {
            unique: true
        }
    },
    twitter: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    instagram: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    soundcloud: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    youtube: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    linkedin: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    reddit: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    snapchat: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    facebook: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    pinterest: {
        type: mongoose.SchemaTypes.Url,
        required: false
    },
    twitch: {
        type: mongoose.SchemaTypes.Url,
        required: false
    }
})

module.exports = Link = mongoose.model('link', LinkSchema)