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
  },
  manageHotelRoom:{
    payload:{
      roomNum: Joi.string().required(),
      isAvailable: Joi.boolean().valid(true, false).required()
    }
  }
};

module.exports = schemas;