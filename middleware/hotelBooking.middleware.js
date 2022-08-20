'use strict'

const Rooms = require("../models/Rooms.model");
const Customers = require("../models/Customers.model");
const log = require('../logger/logger');

const searchHotelRoom = async () => {
    let searchHotelRoomRes;
    let hotelRoomsList = await Rooms.getRooms();
    log.info("searchHotelRoom hotelRoomsList", hotelRoomsList);
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
                    code: "HB206NA",
                    description: "hotel rooms not available, booking full!"
                }
            },
            statusCode: 206
        }
    }

    return searchHotelRoomRes;
}

const bookHotelRoom = async (req) => {
    let bookHotelRoomRes;
    let customer = req.body;
    log.info("bookHotelRoom customer ", customer);

    //find Room availability
    let roomAvailibility = await Rooms.getRoom(customer?.roomNum, true);
    if (roomAvailibility) {
        //add Customer
        let addCustomerRes = await Customers.addCustomer({ emailId: customer?.email, customer });
        if (addCustomerRes) {
            //update Room availibilty to false
            let roomBooking = await Rooms.updateRoom({ roomNumId: customer?.roomNum, isAvailable: false });
            if (roomBooking) {
                bookHotelRoomRes = {
                    content: {
                        response: `roomNum ${customer?.roomNum} booking successfully!`
                    },
                    statusCode: 200
                };

            }
            else {
                bookHotelRoomRes = {
                    content: {
                        error: {
                            code: "HB206RBF",
                            description: `roomNum ${customer?.roomNum} booking failure!`
                        }
                    },
                    statusCode: 206
                };
            }
        }
        else {
            bookHotelRoomRes = {
                content: {
                    error: {
                        code: "HB206RBU",
                        description: `roomNum ${customer?.roomNum} booking unavailiable!`
                    }
                },
                statusCode: 206
            };
        }

    }
    else {
        bookHotelRoomRes = {
            content: {
                error: {
                    code: "HB206RBF",
                    description: `roomNum ${customer?.roomNum} booking failure!`
                }
            },
            statusCode: 206
        };
    }
    return bookHotelRoomRes;
}

module.exports = {
    searchHotelRoom,
    bookHotelRoom
};