const {describe, it, before} = require('mocha')
const CarService = require('./../../src/service/carService')

const {join} = require('path')

const carDatabase = join(__dirname, './../../database', "car.json")
describe('CarService suite tests', () => {
    let carService = {}

    before(() => {
        carService = new CarService({
            cars: carDatabase
        })
    })

    it('given a carCategory it should return an available car', async () => {
        const result = await carService.test()
        console.log('result', result)
    });
})