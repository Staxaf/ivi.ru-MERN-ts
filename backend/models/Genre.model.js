const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    classIcon: {
        type: String,
        required: true
    }
})

const Genre = mongoose.model('GenreCart', genreSchema, 'genres')

module.exports = Genre