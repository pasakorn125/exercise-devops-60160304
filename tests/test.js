const assert = require('assert')
const request = require('supertest')
const app = require('../index.js')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/item"', ()=>{
    it('Something', (done)=>{
        let want = [
            {id: '1', name: 'Iphone 12 Pro Max'},
            {id: '2', name: 'Iphone 12'}
        ]

        request(app).get('/item').expect(want, done)
    })
})