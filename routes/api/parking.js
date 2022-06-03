const express = require('express');
const router = express.Router();

// @route   GET api/parking
// @desc    Test route
// @acess    Public
router.get('/', (req, res) => res.send('Parking route'));


module.exports = router;