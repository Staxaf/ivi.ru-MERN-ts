const router = require('express').Router()
const Person = require('../models/Person.model')

// Get all persons(actors, producers, directors)
router.route('/').get((req, res) => {
    Person.find().limit(30)
        .then(persons => res.json({persons}))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const {name, profession, films, gender, photoUrl, description} = req.body
    const person = new Person({
        name, profession, films, gender, photoUrl, description
    })
    person.save()
        .then(() => res.json('Person is successfully added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router