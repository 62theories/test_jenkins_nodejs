const request = require('supertest')
const app = require('./index')

describe('test GET /', () => {

    it('GET /', (done) => {
        done()
        // await request(app).get('/').expect(`My wealth and treasures? If you want it, I'll let you have it. Look for it, I left all of it at that place!`)
    })

    after(() => {
        app.close()
    })
})