// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/MainController');

// Sử dụng controller để xử lý các tuyến đường API
router.use('/internal-service', mainController);

module.exports = router;
