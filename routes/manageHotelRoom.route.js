const express = require('express');
const router = express.Router();

const manageHotelRoom_controller = require('../controllers/manageHotelRoom.controller');
const schemas = require('../validator/schemas');
const validator = require('../validator/validator');

router.patch(
    "/", validator(schemas.manageHotelRoom.payload, 'body'), manageHotelRoom_controller.manageHotelRoom
);

module.exports = router;