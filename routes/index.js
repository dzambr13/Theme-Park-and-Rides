const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is dope'))

router.get('rides', controllers.getAllRides)

router.get('/rides/:id', controllers.getRideById)

router.post('/rides', controllers.createRide)

router.put('/rides/:id', controllers.updateRide)
router.delete('/rides/:id', controllers.deleteRide)

module.exports = router
