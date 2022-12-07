//modules and globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')


//express settings
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//controllers and routes 
app.use('/places', require('./controllers/places'))

app.get('/', (req,res) => {
    res.render('home')
})

app.get('*', (req,res) => {
    res.render('error404')
})
//listen for connections
app.listen(process.env.PORT)

