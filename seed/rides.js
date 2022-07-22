const db = require('../db')
const Ride = require('../models/rides')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  Ride.collection.drop()
  const rides = [
    {
      name: 'Disney Land Park',
      description: 'DisneyLand is the happiest place on earth, where I am not',
      rating: 'Rating: 4.5 stars',
      rides: 'Rides: Spash Moutain, Space Mountain',
      price: 'Price: $100.00/person',
      image:
        'https://library.kissclipart.com/20180906/ruw/kissclipart-disney-world-clipart-disneyland-magic-kingdom-clip-a8cf97b09e15d788.jpg',
      id: '62d97dd7af5aa3f47fcd1032'
    },
    {
      name: 'Disney World',
      description: 'The second happiest place on earth',
      rating: 'Rating: 4.5 stars',
      rides:
        'Rides: Rock n Roller Coasater Starring Aerosmith, Star Wars: Ride of the Resistance',
      price: 'Price: $109.00/person',
      image: 'https://flyclipart.com/thumb2/clipart-disney-parks-459226.png',
      id: '62d97dd7af5aa3f47fcd1033'
    },
    {
      name: 'Lego Land',
      description: 'The third happiest place on earth',
      rating: 'Rating: 4 stars',
      rides: 'Rides: Pirate Falls, Fairy Tale Brook',
      price: 'Price: $84.99/person',
      image:
        'https://e7.pngegg.com/pngimages/395/361/png-clipart-legoland-california-resort-logo-brand-legoland-drive-legoland-logo-text-retail-thumbnail.png',
      id: '62d97dd7af5aa3f47fcd1034'
    },
    {
      name: 'Will Land',
      description:
        "The least happiest place on earth, you have to ask yourself before you come here, 'should I really be here right now?'. The answer is no, who would ever come to Will land unless they really have to. To the worlds surprise, this place is still up and functioning. If you were to ask me, just go take a walk in your neghborhood, you'll probably have more fun.",
      rating: 'Rating: -100 stars',
      rides: 'Rides: L roller, L coaster',
      price: 'Price: Free',
      image:
        'https://d3ui957tjb5bqd.cloudfront.net/uploads/2016/12/10_2-clown.jpg',
      id: '62d97dd7af5aa3f47fcd1034'
    },
    {
      name: 'Dave Land',
      description:
        "Dave island, also known as Dillusion island, is truly a place of misfortune. When you're here, your IQ drops AT LEAST 80% and you start to experience kidney failure. The owner was said to be so dumb, while Avery and Patrick were finished with their homework, Dave was still forking and cloning.",
      rating: 'Rating: Bruh stars',
      rides: 'Rides: All Closed..',
      price: 'Price: Your Mental Health',
      image: 'https://pbs.twimg.com/media/E-yLGEbWQAAxXCS.jpg',
      id: '62d97dd7af5aa3f47fcd1034'
    },
    {
      name: 'Viry Land',
      description:
        "Just like the owner of this sorry excuse for an amusement park, Viry Land is LOST. They say being here is the new form of torture and it's SO BAD that they PAY you to be here. The only good thing about this place is, this is where Doctors recommend their depressed patients to go to feel happy again.",
      rating: 'Rating: :( ',
      rides: 'Rides: Watching Paint Dry',
      price: 'Price: +$15.00/person',
      image:
        'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F018%2F489%2Fnick-young-confused-face-300x256-nqlyaa.jpg',
      id: '62d97dd7af5aa3f47fcd1034'
    }
  ]
  await Ride.insertMany(rides)
  console.log('Made some rides!')
}
const run = async () => {
  await main()
  db.close()
}
run()
