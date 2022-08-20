const express = require('express');
const router = express.Router();

const bookHotelRoom_controller = require('../controllers/bookHotelRoom.controller');
const schemas = require('../validator/schemas');
const validator = require('../validator/validator');

router.post(
    "/", validator(schemas.bookHotelRoom.payload, 'body'), bookHotelRoom_controller.bookHotelRoom
);

module.exports = router;