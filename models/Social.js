const { Schema, model, default: mongoose } = require('mongoose')

const socialSchema = new Schema({
    whatsapp: {
        type: String,
        required: true,
    },

    telegram: {
        type: String,
        required: true
    },

    facebook: {
        type: String,
        required: true
    },

    instagram: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('social', socialSchema)