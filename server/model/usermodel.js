let mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    username: {
        type: string
    },
    password: {
        type: string
    }
}, {
    collection: "User"
})

let Users = mongoose.model("users", userSchema)