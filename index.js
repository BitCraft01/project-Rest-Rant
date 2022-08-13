//Require mpn modules to include into code
require("dotenv").config()
const express = require("express")

const app = express()

//Importing router from places.js
app.use('/places', require('./controllers/places'))

//Creating the Homepage
app.get("/", (req, res) => {
    res.send("Homepage")
})

//Creating a catch-all
app.get('*', (req, res) => {
    res.status(404).send("<h1>404 Page</h1>")
})

//Keeping the server up listening
app.listen(process.env.PORT)