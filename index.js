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

const PORT = process.env.PORT 

//listen for connections
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

module.exports = app; 

