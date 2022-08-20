const log = require('../logger/logger');
const HotelBooking = require('../middleware/hotelBooking.middleware');

const controller = {
    searchHotelRoom: async function (req, res) {
        log.info(`******** searchHotelRoom started *********`);
        let response = await HotelBooking.searchHotelRoom(req);
        log.info(`******** searchHotelRoom completed *********`);
        res.status(response?.statusCode).json(response);
    }
};

module.exports = controller;