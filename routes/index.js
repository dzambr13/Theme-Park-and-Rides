const { Router } = require('express')
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is dope'))

router.get('rides', controllers.getAllRides)

router.get('/rides/:id', controllers.getRideById)

router.post('/plants', controllers.createPlant)

router.put('/pants/:id', controllers.updatePlant)
router.delete('/plants/:id', controllers.deletePlant)

module.exports = router
