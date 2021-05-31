let express = require('express')
let router = expree.Router()
let Users = require('../model/usermodel')

//GET All
router.get('/', (req, res) => {
    Food.find().exec((err, data) => {
        if (err) return res.status(400).send(err)
        res.status(200).send(data)
    })
})