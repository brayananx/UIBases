const express = require('express');
// const checkAuth = require('../Middleware/checkAuth.middleware');
const decadeController = require('../controllers/decade_poblation');
const router = express.Router();

router.get('/', decadeController.getDecade_poblation);


module.exports = router