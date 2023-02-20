const { Schema, model, default: mongoose } = require('mongoose')

const leadSchema = new Schema({
    email: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('lead', leadSchema)