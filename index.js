//modules and globals
const express = require('express')
const methodOverride = require('method-override')
require('dotenv').config()


const app = express()


//express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


//controllers and routes 
app.use('/places', require('./controllers/places'))

app.get('/', (req,res) => {
    res.render('home')
})

app.get('*', (req,res) => {
    res.render('error404')
})

const PORT = process.env.PORT || 8080

//listen for connections
app.listen(process.env.PORT)
    console.log(`Currently listening on ${process.env.PORT}...`)

module.exports.app

