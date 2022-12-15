const db = require('../models')
const places = require('../models/places')

async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })
    //fake sample comment
    let comment = await db.Comment.create({
        author: 'Famished Fran', 
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    //add comment to places comment array
    places.comments.push(comment.id)
    
    //save place w/ comment
    await place.save()

    //exit the program
    process.exit()
}

seed()