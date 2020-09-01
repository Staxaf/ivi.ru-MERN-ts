const router = require('express').Router()
let Genre = require('../models/Genre.model')
let Multimedia = require('../models/Multimedia.model')

router.route('/add').post((req, res) => {
    const genre = new Genre({
        title: req.body.title,
        classIcon: req.body.classIcon
    })
    genre.save()
        .then(() => res.json('GenreCart is saved!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/').get((req, res) => {
    Genre.find()
        .then(genres => {
            console.log(genres)
            res.json({genres})
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router