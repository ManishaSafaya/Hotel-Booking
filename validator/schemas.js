const Joi = require('joi');

const schemas = {
  searchHotelRoom: {
    query: {

    }
  },
  bookHotelRoom: {
    payload: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      roomNum: Joi.string().required()
    }
  }
};

module.exports = schemas;