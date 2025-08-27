const message = require('../models/message')

const getMessage = async (req,res)=>{
    try{
        const {conversationId} = req.params
        const messages = await message.find({conversationId}).sort({createdAt: 1});
        if(!messages || messages.length == 0) return res.send(404).json({message: 'No Messages Found!'})
        res.status(200).json({ //200 is used for successfull GET req
            success: true,
            data: messages,
            message: 'Messages Loaded Succesfully'
        })
    }catch(err){
        res.status(500).json({
            message: 'There Was an Error Getting the Messages',
            err: err.message
        })
    }
}

const createMessage = async (req,res)=>{
    try{ 
        const {conversationId} = req.params
        const {role, content} = req.body;
        if(!conversationId || !role || !content) return res.status(400).json({message: 'no message created!'}) //400 = bad request
        const newMessage = new message({
            conversationId,
            role,
            content
        })
        await newMessage.save();
        res.status(201).json({
            success: true,
            data: newMessage,
            message: 'Message Created Successfully!'
        })
    }catch(err){
        res.status(500).json({
            message: 'There Was an Error Creating the Messages',
            err: err.message
        })
    }
}

module.exports = {getMessage, createMessage}