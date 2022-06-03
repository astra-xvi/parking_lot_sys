const express = require('express');
const router = express.Router();

// @route   GET api/entrance
// @desc    Test route
// @acess    Public
router.get('/', (req, res) => res.send('Entrance route'));


module.exports = router;