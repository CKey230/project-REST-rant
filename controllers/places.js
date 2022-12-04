const router = require('express').Router()

router.get('/new', (req,res) => {
  res.render('places/new')
})



      
router.post('/', (req,res) => {
  console.log(req.body)
  res.send('POST/places')
})    
    
    res.render('places/index', { places })
})



module.exports = router

