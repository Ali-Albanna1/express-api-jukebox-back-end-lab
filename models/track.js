// require mongoose
const mongoose = require('mongoose')

// create mongoose schema 

const trackSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    artist: {
        type: String,
        required: true,
    }

})


//init mongoose model
const Track = mongoose.model('Track', trackSchema)

// export model
module.exports = Track

