const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.ObjectId,
        ref: 'conversation',
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'assistant'],
        required: true
    },
    content: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const message = mongoose.model('message', messageSchema)

module.exports = message