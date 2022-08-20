const express = require('express');
const router = express.Router();

const searchHotelRoom_controller = require('../controllers/searchHotelRoom.controller');
// const schemas = require('../validator/schemas');
// const validator = require('../validator/validator');

router.get(
    "/", searchHotelRoom_controller.searchHotelRoom
);

module.exports = router;

