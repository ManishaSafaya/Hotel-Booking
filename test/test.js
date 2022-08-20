'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

if (!global.Promise) {
    global.Promise = require('q');
}

chai.use(chaiHttp);
const app = require('../server');

describe('hotelBooking services', function () {
    it('searchHotelRoom success scenario: ', function (done) {
        chai.request(app)
            .post('api/searchHotelRoom')
            .query()
            .end(function (err, res) {
                done();
            });

});


after(function () {
        process.exit(0);
});

});



