const mongoose = require('mongoose')

const converstionSchema = new mongoose.Schema({
    // userId: { //will use when we add clerk
    //     type: String,
    //     required: true
        
    // },
    title: {
        type: String,
        default: 'New Conversation',
        required: true
    }
},{
    timestamps:true
});

const conversation = mongoose.model('conversation', converstionSchema)

module.exports = conversation