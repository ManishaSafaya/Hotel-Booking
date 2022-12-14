const Joi = require('joi');
const log = require('../logger/logger');

const validator = (schema, property) => { 
  
  return (req, res, next) => { 

    const { error } = Joi.validate(req[property], schema); 
    const valid = error == null; 
    if (valid) { 
      next(); 
    } else { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',')
      log.error("Validation Error : ", message); 
      res.status(422).json({ error: message }) 
    } 
  } 
  
} 

module.exports = validator;