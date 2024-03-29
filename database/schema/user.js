const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    discordId: {
        required: true,
        type: String,
    },
    // Server Related
    customRoleId: {
        default: null,
        type: String
    },
    // Twitch
    twitchUsername: {
        default: null,
        type: String
    },
    // League of Legends
    summonerName: {
        default: null,
        type: String
    },
    verified: {
        default: false,
        type: Boolean
    },
    // League of Legends Games
    timesPlayed: {
        default: 0,
        Type: Number
    },
    wins: {
        default: 0,
        type: Number
    },
    losses: {
        default: 0,
        type: Number
    },
    // Level Related
    level: {
        default: 0,
        type: Number
    },
    experience: {
        default: 0,
        type: Number
    },
    lifetimeExperience: {
        default: 0,
        type: Number
    },
    // Currency
    currency: {
        default: 0,
        type: Number
    },
    hasUsedDaily: {
        default: false,
        type: Boolean
    }
})

module.exports = mongoose.model('User', schema)