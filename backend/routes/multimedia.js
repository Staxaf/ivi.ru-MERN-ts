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
        .then(async multimedia => {
            let similarFilms = []
            // find similar films for found multimedia
            for (const genre of multimedia.genres) {
                const newFilms = await Multimedia
                    .find({$and: [{genres: genre._id}, {type: multimedia.type}, {_id: {$ne: multimedia._id}}]})
                    .populate('genres')

                // delete same films
                if(similarFilms.length !== 0) {
                    similarFilms.forEach((similarFilm, i) => [
                        newFilms.forEach((newFilm) => {
                            if(similarFilm._id === newFilm._id) similarFilms = [...similarFilms, newFilm]
                        })
                    ])
                } else {
                    similarFilms = [...similarFilms, ...newFilms]
                }
            }
            if (!multimedia) await res.json({msg: 'Multimedia is not found.'})
            await res.json({multimedia, similarFilms})
        })
        .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router