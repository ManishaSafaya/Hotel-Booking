const log = require('../logger/logger');
const HotelBooking = require('../middleware/hotelBooking.middleware');

const controller = {
    bookHotelRoom: async function (req, res) {
        log.info(`******** bookHotelRoom started *********`);
        let response = await HotelBooking.bookHotelRoom(req);
        log.info(`******** bookHotelRoom completed *********`);
        res.status(response?.statusCode).json(response);
    }
};

module.exports = controller;