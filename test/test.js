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
            .get('/api/searchHotelRoom')
            .query({})
            .then(function (res) {
                done();
            })
            .catch(function (err) {
                console.log(err);
            });

    });

    describe('bookHotelRoom services', function () {
        it('bookHotelRoom success scenario: ', function (done) {
            chai.request(app)
                .post('/api/bookHotelRoom')
                .send({
                    "name": "test",
                    "email": "test@gmail.com",
                    "roomNum": "101"
                })
                .then(function (res) {
                    done();
                })
                .catch(function (err) {
                    console.log(err);
                });
        });
    });

    describe('manageHotelRoom services', function () {
        it('manageHotelRoom success scenario: ', function (done) {
            chai.request(app)
                .patch('/api/manageHotelRoom')
                .send({                    
                    "roomNum": "101",
                    "isAvailable": true
                })
                .then(function (res) {
                    done();
                })
                .catch(function (err) {
                    console.log(err);
                });
        });
    });

    after(function () {
        process.exit(0);
    });
});