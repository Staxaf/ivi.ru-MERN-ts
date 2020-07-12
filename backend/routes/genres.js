const router = require('express').Router()
let Genre = require('../models/Genre.model')

router.route('/add').post((req, res) => {
    const genre = new Genre({
        title: req.body.title
    })
    genre.save()
        .then(() => res.json('Genre is saved!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/').get((req, res) => {
    Genre.find()
        .then(genres => res.json({genres}))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router