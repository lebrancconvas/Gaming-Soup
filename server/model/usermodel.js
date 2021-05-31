let mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: "User"
})

let Users = mongoose.model("users", userSchema)
module.exports = Users