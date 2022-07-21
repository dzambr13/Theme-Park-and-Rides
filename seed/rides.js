const db = require('../db')
const Rides = require('../models/rides')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rides = [
    {
      name: 'Disney Land Park',
      description: 'DisneyLand is the happiest place on earth, where I am not',
      rating: '4.5 stars',
      rides: 'Spash Moutain, Space Mountain',
      price: '$100.00/person'
    },
    {
      name: 'Disney World',
      description: 'The second happiest place on earth',
      rating: '4.5 stars',
      rides:
        'Rock n Roller Coasater Starring Aerosmith, Star Wars: Ride of the REsistance',
      price: '$109.00/person'
    },
    {
      name: 'Lego Land',
      description: 'The third happiest place on earth',
      rating: '4 stars',
      rides: 'Pirate Falls, Fairy Tale Brook',
      price: '$84.99/person'
    }
  ]

  await Rides.inesrtMany(rides)
  console.log('Made some rides!')
}
const run = async () => {
  await main()
  db.close()
}

run()