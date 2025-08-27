const conversation = require('../models/conversation')

const getConversations = async(req,res)=>{
    try{
        const chats = await conversation.find().sort({updatedAt: -1})
        if(!chats) return res.status(404).json({message: 'No Conversation found!'})
        res.json(chats)
    }catch(err){
        res.status(500).json({message: 'Error Fetching Conversations!', err: err.message})
    }
};

const createConversation = async(req,res)=>{
    try{
        const {title} = req.body
        if(!title) return res.status(400).json({message: 'No Conversation Created'});
        const chat = new conversation({
            title
        });
        await chat.save();
        res.status(201).json({
            success: true,
            data: chat,
            message: 'Conversation Created Successfully!'
        })
    }catch(err){
        res.status(500).json({message: 'Chat Couldn\'t be Created', err: err.message})
    }
}

module.exports = {getConversations, createConversation}