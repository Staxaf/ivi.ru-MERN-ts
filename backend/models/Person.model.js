const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    profession: {
        type: String,
        enum: ['Actor', 'Director', 'Screenwriter', 'Composer'],
        required: true
    },
    films: [{
        type: Schema.Types.ObjectId,
        ref: 'Multimedia'
    }],
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    }
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person