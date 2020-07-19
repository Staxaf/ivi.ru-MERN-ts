const router = require('express').Router()
const Person = require('../models/Person.model')
const Multimedia = require('../models/Multimedia.model')
// Get all persons(actors, producers, directors)
router.route('/').get((req, res) => {
    Person.find().limit(30)
        .then(async persons => {
            let newPersons = []
            for (const person of persons) {
                const films = await Multimedia.find({$or: [{actors: person._id}, {directors: person._id}]})
                newPersons = [...newPersons, { ...person._doc, films}]
            }
            await res.json({persons: newPersons})
        })
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