const router = require('express').Router()
const Multimedia = require('../models/Multimedia.model')
const Genre = require('../models/Genre.model')

router.route('/').get((req, res) => {
    Multimedia.find()
        .then(multimedia => res.json({multimedia}))
        .catch(err => res.status(400).json('Error: ' + err))
})

// add a multimedia
router.route('/add').post((req, res) => {
    const {
        type, title, releaseYear, producerCountry, genres, duration,
        actors, trailerUrl, poster, description, ratingIMDB, directors, reviews, ageRating
    } = req.body
    const multimedia = new Multimedia({
        type, title, releaseYear, producerCountry, genres, duration,
        actors, trailerUrl, poster, description, ratingIMDB, directors, reviews, ageRating
    })
    multimedia.save()
        .then(() => res.json('Multimedia is successfully added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

//get films
router.route('/films').get((req, res) => [
    Multimedia.find({type: 'Film'})
        .populate('genres')
        .populate('actors')
        .populate('directors')
        .then(films => res.json({films}))
        .catch(err => res.status(400).json('Error: ' + err))
])

//get serials
router.route('/serials').get((req, res) => {
    Multimedia.find({type: 'Serial'})
        .populate('genres')
        .populate('actors')
        .populate('directors')
        .then(serials => res.json({serials}))
        .catch(err => res.status(400).json('Error: ' + err))
})

//get cartoons
router.route('/cartoons').get((req, res) => [
    Multimedia.find({type: 'Cartoon'})
        .populate('genres')
        .populate('actors')
        .populate('directors')
        .then(cartoons => res.json({cartoons}))
        .catch(err => res.status(400).json('Error: ' + err))
])

router.route('/get/:id').get((req, res) => {
    Multimedia.findById(req.params.id)
        .populate('genres')
        .populate('actors')
        .populate('directors')
        .then(multimedia => {
            if(!multimedia) res.json({msg: 'Multimedia is not found.'})
            res.json({multimedia})
        })
        .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router