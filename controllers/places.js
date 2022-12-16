const router = require('express').Router()
const db = require('../models')

//places/index
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })

})
//places route
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
      }
      else {
        res.render('error404')
      }
    })
})

router.post("/:id/rant", (req, res) => {
  if (req.body.rant) {
    req.body.rant = true;
  } else {
    req.body.rant = false;
  }
  db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
        .then(comment => {
          place.comments.push(comment.id);
          place.save()
          .then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});

router.get('/new', (req, res) => {
  let message = 'Validation Error:'
  res.render('places/new', { message })
})
//show route
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  await db.Place.findByIdAndUpdate(id, req.body)
  res.redirect(`/places/${id}`)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.Place.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/places')
    })
    .catch((err) => {
      console.log("Error!", err)
    })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/edit', { place })
    })
    .catch(err => {
      res.render('error404')
    })
})

router.get('/:id/rant', (req, res) => {
  const { id } = req.params
  db.Place.findById(id)
    .then(place => {
      res.render('places/comment')
    })
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})




module.exports = router
