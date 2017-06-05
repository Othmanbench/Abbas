process.env.NODE_ENV = 'test'

const chai      = require('chai')
    , should    = chai.should()
    , chaiHttp  = require('chai-http')
    , server    = require('../../app/run')

chai.use(chaiHttp)

describe('Billboard API', () => {

    describe('GET /api/billboards', () => {

        it('should return a BigFatBilly billboard', done => {
            chai.request(server)
            .get('/api/billboards')
            .then(res => {
                res.should.have.status(200)
                res.body.name.should.be.eql("BigFatBilly")
                done()
            })
            .catch(done)
        })
    })
})
