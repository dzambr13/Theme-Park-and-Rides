const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ride = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: String, required: true },
    rides: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('rides', Ride)
