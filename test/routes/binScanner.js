const request = require('supertest')
const app = require('../../app')
const should = require('chai').should()

describe('GET /binScanner', function () {
  it('responds with OK', function (done) {
    request(app)
      .get('/binScanner')
      .end(function (err, res) {
        if (err) done(err)
        res.status.should.equal(200)

        done()
      })
  })
})
