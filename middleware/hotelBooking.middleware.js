'use strict'

const Rooms = require("../models/Rooms.model");

const searchHotelRoom = async (req) => {
    let searchHotelRoomRes;
    let hotelRoomsList = await Rooms.getRooms();
    if (hotelRoomsList?.length > 0) {
        searchHotelRoomRes = {
            content: {
                response: hotelRoomsList
            },
            statusCode: 200
        }
    }
    else {
        searchHotelRoomRes = {
            content: {
                error: {
                    code: "HB206NF",
                    description: "hotel room not found"
                }
            },
            statusCode: 206
        }
    }

    return searchHotelRoomRes;
}

module.exports = {
    searchHotelRoom
};