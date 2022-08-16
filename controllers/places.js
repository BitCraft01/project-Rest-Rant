const router = require('express').Router()

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/', (req, res) => {
    let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/Rest1.jpg'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: '/images/Coffee.jpg'
}]

    res.render('places/index', { places })
})

module.exports = router