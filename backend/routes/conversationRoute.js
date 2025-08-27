const express = require('express')
const route = express.Router();
const {getConversations, createConversation} = require('../controllers/conversationController')

route.get('/', getConversations)

route.post('/', createConversation)

module.exports = route