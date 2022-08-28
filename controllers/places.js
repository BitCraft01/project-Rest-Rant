const router = require('express').Router()
const db = require('../models')

// Get /Places
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err=>{
      console.log(err)
      res.render('error404')
    })
})

  //POST /places
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

// GET places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places/:id
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

//PUT /places/:id
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

//Delete /places/:id
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

//GET /place/:id/edit form
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

//POST /places/:id/comment
  router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})

//DELETE /places/:id/comment/:commentId
router.delete("/:id/comment/:commentId", (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
    .then(() => {
      console.log("Success");
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// POST/places/:id/rant
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

//DELETE/places/:id/rant/:rantId
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
