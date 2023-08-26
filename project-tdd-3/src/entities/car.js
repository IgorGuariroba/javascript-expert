const Base = require("./base/base");

class Car extends Base {

    constructor({id, name, releaser, available, gasAvailable}) {
        super({id, name});
        this.releaser = releaser;
        this.available = available;
        this.gasAvailable = gasAvailable;
    }
}

module.exports = Car