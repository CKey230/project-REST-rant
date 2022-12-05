//modules and globals
require('dotenv').config()
const express = require('express')
const app = express()

//express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use('/places', require('./controllers/places'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//controllers and routes 
app.get('/', (req,res) => {
    res.render('home')
})

app.get('*', (req,res) => {
    res.render('error404')
})
//listen for connections
app.listen(process.env.PORT)

