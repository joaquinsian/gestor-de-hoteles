'use strict'

const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth.controller');

router.post('/signup', auth.signUp);
router.post('/signin', auth.signIn);

module.exports = router; 
  