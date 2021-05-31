//Import Express, Cors, BodyParser, Mongoose.
let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let app = express()
let PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Success for connecting to Express Server.")
})

app.listen(PORT, () => {
    console.log(`Port ${PORT} is running.`)
})