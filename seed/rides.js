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
      price: '$100.00/person',
      image:
        'https://library.kissclipart.com/20180906/ruw/kissclipart-disney-world-clipart-disneyland-magic-kingdom-clip-a8cf97b09e15d788.jpg'
    },
    {
      name: 'Disney World',
      description: 'The second happiest place on earth',
      rating: '4.5 stars',
      rides:
        'Rock n Roller Coasater Starring Aerosmith, Star Wars: Ride of the REsistance',
      price: '$109.00/person',
      image: 'https://flyclipart.com/thumb2/clipart-disney-parks-459226.png'
    },
    {
      name: 'Lego Land',
      description: 'The third happiest place on earth',
      rating: '4 stars',
      rides: 'Pirate Falls, Fairy Tale Brook',
      price: '$84.99/person',
      image:
        'https://e7.pngegg.com/pngimages/395/361/png-clipart-legoland-california-resort-logo-brand-legoland-drive-legoland-logo-text-retail-thumbnail.png'
    }
  ]

  await Rides.insertMany(rides)
  console.log('Made some rides!')
}
const run = async () => {
  await main()
  db.close()
}

run()
