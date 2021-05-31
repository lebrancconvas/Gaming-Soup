//Import Express, Cors, BodyParser, Mongoose.
let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

//Connect MongoDB Atlas
let mongo_url = 'mongodb+srv://admin:99999@gaming-soup.jibno.mongodb.net/Gaming-Soup?retryWrites=true&w=majority'
mongoose.Promise = global.Promise
mongoose.connect(mongo_url, { useNewUrlParser: true }).then(
    () => {
        console.log(`[Success] task 2: Connected to the Database.`)
    },
    error => {
        console.log(`[Failed] task 2: ${error}`)
        process.exit()
    }
)

let app = express()

//Add Middleware 
app.use(cors())
app.use(bodyParser.urlencoded({ extented: true }))
app.use(bodyParser.json())

let PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Success for connecting to Express Server.")
})

app.listen(PORT, () => {
    console.log(`Port ${PORT} is running.`)
})

let Users = require('./router/userrouter')
app.use('/api/user', Users)

app.use((req, res, next) => {
    let err = new Error(`Don't find your path.`)
    err.status = 404
    next(err)
})