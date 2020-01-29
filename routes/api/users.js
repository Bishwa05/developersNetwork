const express = require('express');
const router = express.Router()

// @route   POST api/users
// @desc    Register user
// @access  public
router.post('/', (req,res) => {
    console.log(req.body);
    res.send('user route')
});

module.exports = router;