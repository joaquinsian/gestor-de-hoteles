'use strict'

const express = require('express');
const router = express.Router();

const user = require('../controllers/users.controller');

router.post('/', user.registerUser);


module.exports = router; 
 