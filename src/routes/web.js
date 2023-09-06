const express = require('express');
const router = express.Router();

router.get('/phi', (req, res) => {
    res.render('example.ejs')
  })

module.exports = router;