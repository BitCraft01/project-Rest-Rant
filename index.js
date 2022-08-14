//Require mpn modules to include into code
require("dotenv").config()
const express = require("express")

const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Importing router from places.js
app.use('/places', require('./controllers/places'))

//Creating the Homepage
app.get("/", (req, res) => {
    res.render("home")
})

//Creating a catch-all
app.get('*', (req, res) => {
    res.render('error404')
})

//Keeping the server up listening
app.listen(process.env.PORT)