const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    movieId : {
        type: String
    },
    id: {
        type: String
    },
    posterPath: {
        type: String
    },
    profilePath : {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime : {
        type: String
    },
    actorBio : {
        type: String
    },
    name: {
        type: String
    },
    birthday: {
        type: String
    },
    placeOfBirth : {
        type: String
    },
    popularity : {
        type: String
    }
}, { timestamps: true })




const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }
