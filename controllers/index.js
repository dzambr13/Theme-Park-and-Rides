const Rides = require('../models/rides')

const createRide = async (req, res) => {
  try {
    const ride = await new Rides(req.body)
    await ride.save()
    return res.status(201).json({
      ride
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRides = async (req, res) => {
  try {
    const rides = await Rides.find()
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRideById = async (req, res) => {
  try {
    const { id } = req.params
    const ride = await Rides.findById(id)
    if (ride) {
      return res.status(200).json({ ride })
    }
    return res.status(404).send('Ride with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateRide = async (req, res) => {
  try {
    const ride = await Ride.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(ride)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRide = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Rides.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Ride deleted')
    }
    throw new Error('Ride not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createRide,
  getAllRides,
  getRideById,
  updateRide,
  deleteRide
}
