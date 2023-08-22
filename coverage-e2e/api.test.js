const {describe, it} = require('mocha')
const request = require('supertest')
const app = require('./api')
const assertion = require('assert')
const assert = require("assert");

describe('API Suite test', () => {
    describe('/contatos', () => {
        it('should request the contact page and return HTTP Status 200', async () => {
            const response = await request(app)
                .get('/contatos')
                .expect(200)
            assert.deepStrictEqual(response.text, 'contact us page')
        });
    })

    describe('/hello', () => {
        it('should an inexistent route /hi and redirect to /hello', async () => {
            const response = await request(app)
                .get('/hello')
                .expect(200)
            assert.deepStrictEqual(response.text, 'Hello World!')
        });
    })

    describe('/login', () => {
        it('should successfully on the login route and return HTTP Status 200', async () => {
            const response = await request(app)
                .post('/login')
                .send({
                    username: "igor",
                    password: "123"
                })
                .expect(200)
            assert.deepStrictEqual(response.text, 'Logado com sucesso!')
        });

        it('should unauthorized a request it using wrong credentials and return HTTP Status 401', async () => {
            const response = await request(app)
                .post('/login')
                .send({
                    username: "opa",
                    password: "1243"
                })
                .expect(401)
            assert.deepStrictEqual(response.text, 'Login falhou!')
        });
    })


})