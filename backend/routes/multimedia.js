const router = require('express').Router()
const Multimedia = require('../models/Multimedia.model')

router.route('/').get((req, res) => {
    Multimedia.find()
        .then(multimedia => res.json({multimedia}))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const {type, title, releaseYear, producerCountry, genres, duration,
        actors, trailerUrl, poster, description, ratingIMDB, directors, reviews, ageRating} = req.body
    const multimedia = new Multimedia({
        type, title, releaseYear, producerCountry, genres, duration,
        actors, trailerUrl, poster, description, ratingIMDB, directors, reviews, ageRating
    })
    multimedia.save()
        .then(() => res.json('Multimedia is successfully added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router