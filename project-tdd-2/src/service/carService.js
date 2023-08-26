const BaseRepository = require('./../repository/base/baseRepository')
const {n} = require("sinon/lib/sinon/spy-formatters");

class CarService {

    constructor({cars}) {
        this.cars = cars;
        this.carRepository = new BaseRepository({file: cars})
    }

    async getAvailableCar(carCategory) {
        return null
    }

    getRandomPositionFromArray(list) {
        const listLength = list.length
        return Math.floor(
            Math.random() * (listLength)
        )

    }

    chooseRandomCar(carCategory) {
        const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds)
        return carCategory.carIds[randomCarIndex];
    }
}

module.exports = CarService