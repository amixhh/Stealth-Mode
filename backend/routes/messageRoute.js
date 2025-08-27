const express = require('express')
const route = express.Router();
const {getMessage, createMessage} = require('../controllers/messageController')

route.get('/:conversationId/messages', getMessage)

route.post('/:conversationId/messages', createMessage)

module.exports = route