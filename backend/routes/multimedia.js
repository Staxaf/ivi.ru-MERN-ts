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
        .then(films => {
            res.json({films})
        })
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

const getNewMultimedia = (type) => {
    return Multimedia.find({type, releaseYear: {$gt: 2013}}).sort({releaseYear: -1})// films are greater then 2013
        .populate('genres')
}
const getBestMultimedia = (type) => {
    return Multimedia.find({type}).sort({ratingIMDB: -1})
        .populate('genres')
}

router.route('/films/new').get(async (req, res) => {
    try {
        const newFilms = await getNewMultimedia('Film')
        res.json({newFilms})
    } catch (err){
        res.status(400).json('Error: ' + err)
    }
})

router.route('/films/best').get(async(req, res) => {
    try {
        const bestFilms = await getBestMultimedia('Film')
        res.json({bestFilms})
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
})

router.route('/serials/new').get(async (req, res) => {
    try {
        const newSerials = await getNewMultimedia('Serial')
        res.json({newSerials})
    } catch (err){
        res.status(400).json('Error: ' + err)
    }
})

router.route('/serials/best').get(async(req, res) => {
    try {
        const bestSerials = await getBestMultimedia('Serial')
        res.json({bestSerials})
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
})

router.route('/cartoons/new').get(async (req, res) => {
    try {
        const newCartoons = await getNewMultimedia('Cartoon')
        res.json({newCartoons})
    } catch (err){
        res.status(400).json('Error: ' + err)
    }
})

router.route('/cartoons/best').get(async(req, res) => {
    try {
        const bestCartoons = await getBestMultimedia('Cartoon')
        res.json({bestCartoons})
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
})




module.exports = router