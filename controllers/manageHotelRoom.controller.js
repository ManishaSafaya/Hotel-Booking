const log = require('../logger/logger');
const HotelBooking = require('../middleware/hotelBooking.middleware');

const controller = {
    manageHotelRoom: async function (req, res) {
        log.info(`******** manageHotelRoom started *********`);
        let response = await HotelBooking.manageHotelRoom(req);
        log.info(`******** manageHotelRoom completed *********`);
        res.status(response?.statusCode).json(response);
    }
};

module.exports = controller;