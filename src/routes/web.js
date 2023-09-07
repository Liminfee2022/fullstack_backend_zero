const express = require('express');
const {getHomePage} = require('../controllers/homeController');
const router = express.Router();

router.get('/phi', (req, res) => {
    res.render('example.ejs')
  })

router.get('/p', getHomePage)


module.exports = router;