let express = require('express')
let app = express()
let PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Port ${PORT} is running.`)
})