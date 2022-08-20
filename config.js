var config = {
  //for dev or local
  DEV: {
    //mongodb connection settings
    database: {
      host: "127.0.0.1",
      port: "27017",
      dbname: "HotelBooking"
    },
    port: 3000,
    logging: {
      name: "hotelBooking-Dev",
      level: "debug",
      path: "./logs/server.%Y%m%d.log",
      sizeOflog: "250m"
    }
  },
  //for UAT
  UAT: {
  },
  //for PROD
  PROD: {
  }
};
module.exports = config;