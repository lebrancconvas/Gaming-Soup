let express = require('express')
let router = expree.Router()
let Users = require('../model/usermodel')

//GET All
router.get('/', (req, res) => {
    Users.find().exec((err, data) => {
        if (err) return res.status(400).send(err)
        res.status(200).send(data)
    })
})

//GET by ID 
router.get('/:_id', (req, res) => {
    Users.findById(req.params.id).exec((err, data) => {
        if (err) return res.status(400).send(err)
        res.status(200).send(data)
    })
})

//POST (Create New Data)
router.post('/', (req, res) => {
    let obj = new Users(req.body)
    odj.save((err, data) => {
        if (err) return res.status(400).send(err)
        res.status(200).send(`Add Data Already.`)
    })
})