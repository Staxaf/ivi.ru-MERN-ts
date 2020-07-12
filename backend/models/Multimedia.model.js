const mongoose = require('mongoose')
const Schema = mongoose.Schema

const multimediaSchema = new Schema({
    type: {
        type: String,
        enum: ['Film', 'Series', 'Cartoon'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    producerCountry: {
        type: String,
        required: true
    },
    genres: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }],
    duration: {
        type: Number,
        required: true
    },
    actors: [{
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }],
    trailerUrl: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ratingIMDB: {
        type: Number,
        required: true
    },
    directors: [{
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }],
    reviews: [{
        userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        description: {type: String, required: true},
        createdAt: {type: Date, required: true},
        likesCount: {type: Number, required: true},
        dislikesCount: {type: Number, required: true}
    }],
    ageRating: {
        type: Number,
        required: true
    }
})

const Multimedia = mongoose.model('Multimedia', multimediaSchema)

module.exports = Multimedia